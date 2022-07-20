import reactDom from 'react-dom';
import './navbar.css';

function Nav() {
    return(
    <header>
        
        <ul>
            {/* <li id='brand'>Sodo</li> */}
            <h4 id='brand'>Sodo</h4>
            <li>About us</li>
            <li>Download</li>
            <li>Contact</li>
        </ul>
        <ul>
            <li style={{color:"#5555FF"}}>Log in</li>
            <li><button className='btn btn-primary'>Primary action</button></li>
        </ul>
        <div className='Toggle-button'>
            <span id='bar'></span>
            <span id='bar'></span>
            <span id='bar'></span>
        </div>
    </header>
    )
}

export default Nav;