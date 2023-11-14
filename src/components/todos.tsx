import React, {useEffect, useState} from 'react';
import {ITodosProps} from "../Interfaces/IProps";
import ITodo from "../Interfaces/ITodo";

export let todosData: ITodo[] = [];
const Todos: React.FC<ITodosProps> = ({ handleOverlayVisibility, purpose }) => {
    const [, setLocalTodosData] = useState<ITodo[]>([]);

    useEffect(() => {
        const todosString = localStorage.getItem("todos");
        const todosStringParsed: ITodo[] = todosString ? JSON.parse(todosString) : [];
        // localStorage.setItem('todos',JSON.stringify([{name:"help mum", done:false},{name:"help father", done:true},{name:"help masha", done:false}]))
        setLocalTodosData(todosStringParsed);
        todosData = todosStringParsed;
    }, []);


    const handleCheckboxChange = (index: number) => {
        const updatedTodos = [...todosData];
        updatedTodos[index].done = !updatedTodos[index].done;
        setLocalTodosData(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const handleRemoveTodo = (index: number, event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation(); // Stop event propagation
        const updatedTodos = todosData.filter((_, idx) => idx !== index);
        setLocalTodosData(updatedTodos);
        todosData = updatedTodos;
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    return (
        <div className="cryptoContainer">
            {todosData.map((item, index) => (
                <div key={index} className="cryptoDiv cryptoNotAdd todoDiv"  onClick={() => handleCheckboxChange(index)}>
                    <span>{item.name}</span>
                    <div className="todoActionBtns">
                        <input
                            type="checkbox"
                            checked={item.done}
                            onChange={() => handleCheckboxChange(index)}
                            className="custom-checkbox"
                            id={`checkbox-${index}`}
                        />
                        <label htmlFor={`checkbox-${index}`} className="checkbox-label"></label>
                        <button className="removeBtn" onClick={(e) => handleRemoveTodo(index, e)}>✖</button>
                    </div>

                </div>
            ))}
            <div className="cryptoDiv cryptoDivAdd" onClick={() => {handleOverlayVisibility(true); purpose("todo")}}>
                <button className="addCryptoBtn">
                    <img src='./icons/icons8-add-100.png' alt="addCryptoBtn" />
                </button>
            </div>
        </div>
    );
}

export default Todos;

