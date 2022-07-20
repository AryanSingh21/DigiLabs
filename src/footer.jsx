import React from "react";
import './footer.css'
import fb from './image/Vector-4.png'
import you from './image/Vector-3.png'
import tw from './image/Vector-2.png'
import insta from './image/Vector-1.png'
import shape from './image/shape.png'
import play from './image/playstore.png'
import app from './image/appstore.png'

function Foot(){
    return(
        <footer>
            <div className="social">
            <ul>
                <li>
                    <h4><span><img src={shape}></img></span>Sodo</h4>
                </li>
                <li>
                    <img src={fb}></img>
                    <img src={you}></img>
                    <img src={tw}></img>
                    <img src={insta}></img>
                </li>
            </ul>
            </div>
            <div>
                <ul>
                    <li>Company</li>
                    <li>About us</li>
                    <li>Meet the team</li>
                    <li>Careers</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Product</li>
                    <li>Product</li>
                    <li>Product</li>
                    <li>Product</li>
                    <li>Product</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Product</li>
                    <li>Product</li>
                    <li>Product</li>
                    <li>Product</li>
                </ul>
            </div>
            <div className="Download">
                <button><img src={play}></img>App Store</button>
                <button><img src={app}></img>Play Store</button>

            </div>
        </footer>

        
    )
}
export default Foot;