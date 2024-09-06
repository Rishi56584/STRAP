import './hero.css'
import herovid from './hero2.mp4'

export default function Hero(){
    
    return(
        <div className='hero-main'>
            <div className="hero">
                <div className="videocover">
                    <video autoPlay loop muted playsInline>
                        <source src={herovid} type='video/mp4'/>
                    </video>
                </div>
            </div>
            
        </div>
    )
}