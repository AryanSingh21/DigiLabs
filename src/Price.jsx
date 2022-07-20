import React from "react";
import './price.css'

function Price(props){
    const mystyle= {
        backgroundColor:props.backgroundColor,
        height:props.height,
        padding:props.padding,
        margin:props.margin,
        color:props.color,
    }
    const popular ={
        backgroundColor:"#FCAF3B",
        width:"fit-content",
        borderRadius:"1em",
        color:"black"
        
    }
    return(
        <div className="PriceCard" style={mystyle}>
            <ul>
                <li style={popular}>{props.popular}</li>
                <li><h2>{props.plan}</h2></li>
                <li><span id="cost">{props.cost}</span>/month</li>
                <li><span><img src={props.img}></img></span>lorem ipsum dolor</li>
                <li><span><img src={props.img}></img></span>lorem ipsum dolor</li>
                <li><span><img src={props.img}></img></span>lorem ipsum dolor</li>
                <li><button>Sign up</button></li>
            </ul>
        </div>
    )
}

export default Price;