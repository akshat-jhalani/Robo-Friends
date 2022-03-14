import React from 'react';
import Card from './Card';


const Cardlist = ({robots}) => {
    return (
        <div>
        {
            robots.map((user,i) => {
                return (
                    <Card 
                        key = {i} // key would be used to uniquely identify an element if any of them are deleted 
                        id = {robots[i].id} 
                        name = {robots[i].name} 
                        email = {robots[i].email}
                        />
                );
            })
        }
        </div>
    );
}

export default Cardlist