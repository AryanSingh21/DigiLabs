import React from "react";
import img from './image/image 1.png';
import './card.css'

function Card() {
    return(
        <div className="card">
            <div className="new">
            New
            </div>
            <img src={img}></img>
            <h2>Lorem ipsum</h2>
            <p>Nam in velit malesuada, porta erat a, vestibulum orci. In ac nibh malesuada, volutpat metus ac, laoreet erat.</p>
            <button className="btn btn-primary">Button</button>
        </div>
    )
    
}

export default Card;