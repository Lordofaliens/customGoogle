import ITab from "../Interfaces/ITab";
import {tabsData} from "../components/tabs";

export let initListOfTabs: ITab[] = [];


function addTabButtonHandler(image : string, name : string, link : string) {
    const listFromStorage = localStorage.getItem('tabs');
    const parsedListOfTabs: ITab[] = listFromStorage ? JSON.parse(listFromStorage) : initListOfTabs;
    const newItem: ITab = { image, name, link };
    parsedListOfTabs.push(newItem);
    tabsData.length = 0;
    tabsData.push(...parsedListOfTabs);
    localStorage.setItem('tabs', JSON.stringify(tabsData));
}

export {addTabButtonHandler};