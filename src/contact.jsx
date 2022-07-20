import React from "react";
import './contact.css'
function Form(){
    return(
        <div className="contact">
            <h1>Contact us</h1>
            <form>
            <div className="name">
                    <div className="Fname">
                        <label>First name</label>
                        <input placeholder="Alex"></input>
                    </div>
                    <div className="Lname">
                        <label>Last name</label>
                        <input placeholder="Bloggs"></input>
                    </div>
                </div>
                
                <div className="info">
                    <label>Email address</label>
                    <input placeholder="alex.bloggs@email.com"></input>
                    <label>Your Message</label>
                    {/* <input style={{height:"150px"}} placeholder="Enter your message here"></input> */}
                    <textarea placeholder="Enter your message here"></textarea>
                    <button id='submitBtn' className="btn btn-primary">Submit message</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
