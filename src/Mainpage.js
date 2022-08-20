import './App.css';
import './index.css'
import Typewriter from "typewriter-effect";
import ReactBubblyEffectButton from "react-bubbly-effect-button";
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';

function Mainpage () {
    return(
        <>    
        <div className="App">
        <header className="App-header">
          <FadeIn delay={1200}>
            <div><p className="align-left">Hi! I'm</p></div>
            <div><p className="name-color">Dhruv Gera</p></div>
            <div>
              <p className='container'>
                Proficient in
                <Typewriter

                  onInit={(typewriter) => {

                    typewriter
                      .pauseFor(2500)
                      .typeString("Python")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Java")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Flutter")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("React JS")
                      .start();

                  }} />
                and many more languages/frameworks!
              </p>
            </div>
            ⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀
            <div className="button-proceed-homepage">
              
            <Link to="aboutme"><ReactBubblyEffectButton text="About Me" color='#fff' bgColor='#ff0081' onClick={onClick} /></Link>
             
            </div>
          </FadeIn>
        </header>
      </div></>
    );
}

const onClick = () => {
    console.log('Done.')
  }

export default Mainpage;