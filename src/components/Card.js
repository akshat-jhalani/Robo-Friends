import React from 'react';


const Card = ({name, email, id}) => {
        return(
            <div className='tc bg-light-blue dib br3 pa3 ma1 grow bw2 shadow-5'>
                <img alt = "Robots" src = {`https://robohash.org/${id}?size=200x200`}/>
                <div>
                    <h2> {name} </h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }


export default Card;