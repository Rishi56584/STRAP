import './appoint.css';
import place from './place.jpg'

export default function Appoint(){
    return(
        <div className='appoint'>
            <div>
                <h1>Visit The Place of Stray Animals</h1>
                
                    <a href='http://localhost:3000/visit'><p className='visit'>visit</p></a>
                
            </div>
            <div className='place'>
                <img src={place} alt='' ></img>
            </div>
        </div>
    )
}