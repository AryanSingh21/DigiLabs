import React from "react";
import img from './image/image 1.png';
import './intro.css'

function Intro(){
    return (
        <div className="box1">
            <div className="content">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Praesent placerat ipsum nec mi maximus, vel cursus mauris cursus. Vivamus cursus ante eget orci egestas malesuada.</p>
                <div id="btns">
                    <button className="btn btn-primary">primary action</button>
                    <button className="btn btn-light">Secondary action</button>
                    
                </div>
            </div>
            <div className="Image">
                <img src={img}></img>
            </div>
            
        </div>
    )
}

export default Intro;