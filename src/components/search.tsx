import React, {useState} from 'react';
import {ISearchProps} from "../Interfaces/IProps";

const Search: React.FC<ISearchProps> = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="searchContainer">
            <input type="text" placeholder="Search Anything" className="searchInput" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyPress={handleKeyPress}></input>
            <button id="searchBtn" onClick={()=>{handleSearch()}}><img src="./icons/icons8-search-100.png" style={{width:'20px', height:'20px'}} alt={"searchIcon"}/></button>
        </div>
    );
}

export default Search;