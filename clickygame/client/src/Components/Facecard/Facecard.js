import React from 'react';
import './Facecard.css'

const Facecard = props => {

    return (
    <div className="card" onClick={props.handleIncrement}>
        <div className="img-container">
            <img className="card-image" alt={props.name} src={props.image}/>

        </div>
    </div>
    )
}

export default Facecard;