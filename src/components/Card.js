import React from "react";
import users from "./users.json"

const Card = (props) => {
    return(
        <div className="cardCont">
            {
                users.filter((user) => {
                    if(props.search === ""){
                        return user
                    }else if(user.name.toLowerCase().includes(props.search.toLowerCase())){
                        return user
                    }
                }).map((user,key) => (
                    <div key={key.toString()} className="card">
                        <img src={`https://robohash.org/${user.name}`} alt={user.name} />
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Card;