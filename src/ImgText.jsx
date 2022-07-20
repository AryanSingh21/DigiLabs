import React from "react";
import img from './image/image 1.png';
import './ImgText.css'

function Text(props) {
    const mystyle={
        
        order:props.order,
    }
    return (
        <div className="box3" >
            <div className="text" style={mystyle} >
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                <p>Praesent placerat ipsum nec mi maximus, vel cursus mauris cursus. Vivamus cursus ante eget orci egestas malesuada.</p>
            </div>
            <img src={img}></img>
        </div>
    )
    
}

export default Text;
