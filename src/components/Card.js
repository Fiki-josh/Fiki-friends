import React from "react";

const Card = ({users}) => {

    return(
        <div className="cardCont">
            {
                 users.map((user) => (
                    <div key={user.id} className = 'card'>
                        <img src={`https://robohash.org/${user.name}?set=set3`} alt={user.name} />
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