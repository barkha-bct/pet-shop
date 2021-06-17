import React from "react";
import './style.css';

function SearchBar(props) {
    return (
        <div className="searchbar">
            <input type="text" placeholder="Search for products, brands and more" class="desktop-searchBar"  ></input>
        </div>
    );
}

export default SearchBar;