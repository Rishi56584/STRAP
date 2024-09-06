import './navbar.css';
import paw from './logo1-1.png';

export default function Navbar(){
    function moveBottom(){
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }
    return(
        <navbar className="nav">
            <div>
            <img src={paw} className='logo'></img>

            </div>
        
            <div className="nav-options">
            
                <ul className="nav-list">
                    <li><a href="http://localhost:3000/donate">DONATE</a></li>
                    <li><a href='http://localhost:3000/joinus'>JOIN US</a></li>
                    <li><a href='http://localhost:3000/rescue'>RESCUE</a></li>
                    <li onClick={moveBottom}><a href='#'>CONTACT US</a></li>
                </ul>
            </div>
        </navbar>
    )
}