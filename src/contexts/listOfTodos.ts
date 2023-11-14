import ITodo from "../Interfaces/ITodo";
import {todosData} from "../components/todos";

function addTodoButtonHandler(name : string, done : boolean) {
    const listFromStorage = localStorage.getItem('todos');
    const listOfTodos: ITodo[] = listFromStorage ? JSON.parse(listFromStorage) : [];
    const newItem: ITodo = { name, done };
    listOfTodos.push(newItem);
    localStorage.setItem('todos', JSON.stringify(listOfTodos));
    todosData.length = 0;
    todosData.push(...listOfTodos);
}



export {addTodoButtonHandler};