import React from 'react';
import './Facecard.css'

const Facecard = props => {

    return (
    <div className="card">
        <div className="img-container">
            <img onClick={() => props.handleIncrement(props.id)} className="card-image" id={props.id} alt={props.name} src={props.image}/>

        </div>
    </div>
    )
}

export default Facecard;