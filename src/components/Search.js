import React from "react";

const Search = ({updateSearch}) => {
    return(
        <div className="searchCont">
            <h2>RoboFriends</h2>
            <input type="text" onChange={updateSearch} placeholder="Search..."/>
        </div>
    );
}

export default Search;