import React from "react"
import './sponsor.css'
import amazon from './image/Amazon.png';
import google from './image/Google.png';
import monzo from './image/Monzo.png';
import nike from './image/Nike.png';
import zoopla from './image/Zoopla.png'

function Sponsor(){
    return (
        <div className="box2">
            <h2>Trusted by</h2>
            <div className="logos">
               <img src={monzo} style={{color:"red"}}></img>
               <img src={zoopla}></img>
               <img src={google}></img>
               <img src={nike}></img> 
               <img src={amazon}></img>
            </div>
        </div>
    )
}

export default Sponsor;