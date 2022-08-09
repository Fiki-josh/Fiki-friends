import React from "react";

const Search = (props) => {
    return(
        <div className="searchCont">
            <h2>RoboFriends</h2>
            <input type="text" onChange={props.onChange} placeholder="Search..."/>
        </div>
    );
}

export default Search;