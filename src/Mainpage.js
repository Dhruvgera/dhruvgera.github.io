import './App.css';
import './index.css'
import Typewriter from "typewriter-effect";
import ReactBubblyEffectButton from "react-bubbly-effect-button";
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';

function Mainpage() {
  window.scrollTo(0, 0)
  return (
    <>
      <div className="App">
        <header className="App-header">
          <FadeIn delay={500}>
            <div><p className="align-left">Hi! I'm</p></div>
            <div><p className="name-color">Dhruv Gera</p></div>
            <div>
              <p className='container'>
                Proficient in
                <Typewriter

                  onInit={(typewriter) => {

                    typewriter
                      .pauseFor(1100)
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
            <div className="button-proceed-homepage">
            <br></br>
            <br></br>
              <Link to="aboutme"><ReactBubblyEffectButton text="About Me" color='#fff' bgColor='#ff0081' /></Link>
            </div>
          </FadeIn>
        </header>
      </div></>
  );
}

export default Mainpage;