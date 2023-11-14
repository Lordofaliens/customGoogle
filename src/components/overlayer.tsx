import React, {useState} from 'react';
import {IOverLayerProps} from "../Interfaces/IProps";
import {addTodoButtonHandler} from "../contexts/listOfTodos";
import {addTabButtonHandler} from "../contexts/listOfTabs";
import {addCryptoButtonHandler} from "../contexts/listOfCrypto";

const OverLayer: React.FC<IOverLayerProps> = ({handleOverlayVisibility, purpose}) => {
    const [input1, setInput1] = useState<string>('');
    const [input2, setInput2] = useState<string>('');
    const [input3, setInput3] = useState<string>('');

    const handleTabKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTabButtonHandler(input1, input2, input3);
            handleOverlayVisibility(false);
        }
    };

    const handleTodoKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTodoButtonHandler(input1, false);
            handleOverlayVisibility(false);
        }
    };

    const handleCryptoKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addCryptoButtonHandler(input1);
            handleOverlayVisibility(false);
        }
    };



    return (
        <div className="overLayer">
            <div className="inputContainer">
                <button className="overlayerRemoveBtn" onClick={() => handleOverlayVisibility(false)}>✖</button>
                {purpose==="todo" &&
                    <div className="inputContainerInner">
                        <p>Todo</p>
                        <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} className="searchInput" onKeyPress={handleTodoKeyPress}/>
                        <button onClick={()=>{addTodoButtonHandler(input1,false);handleOverlayVisibility(false)}} className="overlayerSumbitBtn">Add Todo</button>
                    </div>

                }
                {purpose==="crypto" &&
                    <div className="inputContainerInner">
                        <p>Crypto</p>
                        <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} className="searchInput" onKeyPress={handleCryptoKeyPress}/>
                        <button onClick={()=>{addCryptoButtonHandler(input1);handleOverlayVisibility(false)}} className="overlayerSumbitBtn">Add Crypto</button>
                    </div>

                }
                {purpose==="tab" &&
                    <div className="inputContainerInner">
                        <p>Tab image</p>
                        <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} className="searchInput"/>
                        <p>Tab name</p>
                        <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} className="searchInput"/>
                        <p>Tab link</p>
                        <input type="text" value={input3} onChange={(e) => setInput3(e.target.value)} className="searchInput" onKeyPress={handleTabKeyPress}/>
                        <button onClick={()=>{addTabButtonHandler(input1,input2,input3);handleOverlayVisibility(false)}} className="overlayerSumbitBtn">Add Tab</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default OverLayer;