import './App.css';
import './index.css'
import FadeIn from 'react-fade-in';
import ReactBubblyEffectButton from "react-bubbly-effect-button";
import { Link } from 'react-router-dom';

function Contactme() {
    window.scrollTo(0, 0)
    return (
        <div className="App">
            <header className="App-header">
                <FadeIn delay={500}>
                    <div className='container-aboutme'>
                        <p className="name-color">You can contact me via: </p>
                        <div>
                            <p>• <a href="mailto:dhruvgera61@gmail.com">Mail</a></p>
                            <p>• <a href="https://t.me/dhruv_gera" target="_blank">Telegram</a></p>
                        </div>
                    </div>
                    <div className="button-proceed-homepage">
                        <br></br>
                        <br></br>
                        <Link to="/"><ReactBubblyEffectButton text="Home" color='#fff' bgColor='#ff0081' /></Link>
                    </div>
                </FadeIn>
            </header>
        </div>
    );
}

export default Contactme;