import React, {useEffect, useState} from 'react';
import {ITabsProps} from "../Interfaces/IProps";
import {initListOfTabs} from "../contexts/listOfTabs";
import ITab from "../Interfaces/ITab";

export let tabsData: ITab[] = [];
const Tabs: React.FC<ITabsProps> = ({handleOverlayVisibility,purpose}) => {

    const [localTabData, setLocalTabData] = useState<ITab[]>([])

    useEffect(() => {
        const listFromStorage = localStorage.getItem('tabs');
        const parsedListOfTabs: ITab[] = listFromStorage ? JSON.parse(listFromStorage) : initListOfTabs;
        setLocalTabData(parsedListOfTabs);
        tabsData = parsedListOfTabs;
    }, []);

    useEffect(() => {
        tabsData = localTabData;
    }, [localTabData]);

    const handleRemoveTab = (index: number, event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation(); // Stop event propagation
        const updatedTabs = tabsData.filter((_, idx) => idx !== index);
        setLocalTabData(updatedTabs);
        tabsData = updatedTabs;
        localStorage.setItem('tabs', JSON.stringify(updatedTabs));
    };

    return (
        <div className="tabDivContainer">
            {localTabData.map((item: ITab, index) => (
                <div className="tabDiv" onClick={() => {window.location.href = item.link}} key={item.name}>
                    <div key={item.name}>
                        {item.image !== "" ? (
                            <img src={item.image} className="tabImage" alt={item.name} />
                        ) : (
                            <p>{item.name}</p>
                        )}
                    </div>
                    <button className="removeBtn" onClick={(e) => handleRemoveTab(index, e)}>✖</button>
                </div>
            ))}
            <div className="tabDiv tabDivAdd" key="addTabBtn" onClick={()=>{handleOverlayVisibility(true); purpose("tab")}}>
                <button className="addTabBtn">
                    <img src='./icons/icons8-add-100.png' alt={"addTabBtn"}/>
                </button>
            </div>
        </div>
    );
}

export default Tabs;