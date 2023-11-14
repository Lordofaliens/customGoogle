import ITab from "../Interfaces/ITab";
import {tabsData} from "../components/tabs";

export let initListOfTabs: ITab[] = [
    {
        image: './icons/icons8-youtube-100.png',
        name: 'YouTube',
        link: 'https://www.youtube.com/'
    },
    {
        image: '',
        name: 'Spotify',
        link: 'https://open.spotify.com/'
    },
    {
        image: '',
        name: 'BrightSpace',
        link: 'https://brightspace.tudelft.nl/d2l/home/6647'
    },
];


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