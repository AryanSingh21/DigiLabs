import React from "react";
import bulb from './image/bulb.png'
import './idea.css'

function Point(){
    return(
        <div className="point">
            <img src={bulb}></img>
            <h2>Lorem ipsum</h2>
            <p>Nam in velit malesuada, porta erat a, vestibulum orci. In ac nibh malesuada, volutpat metus ac, laoreet erat.</p>
        </div>
    )
}

export default Point;