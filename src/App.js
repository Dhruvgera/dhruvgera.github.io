import logo from './logo.svg';
import './App.css';
import './index.css'
import Typewriter from "typewriter-effect";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import ReactBubblyEffectButton from "react-bubbly-effect-button";
import FadeIn from 'react-fade-in';


function App() {
  
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
    }, []);


    const particlesLoaded = useCallback(async (container) => {
      await console.log(container);
    }, []);

  return (
    <><Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      fpsLimit: 60,
  background: {
   
  },
  backgroundMode: {
    enable: true
  },
  particles: {
    color: {
      value: ["#f67e7d", "#843b62", "#621940"]
    },
    links: {
      color: "#ffb997",
      enable: true
    },
    move: {
      enable: true,
      speed: 4
    },
    size: {
      value: 5,
      random: {
        enable: true,
        minimumValue: 1
      },
      animation: {
        enable: true,
        speed: 2.5,
        minimumValue: 1
      }
    },
    opacity: {
      value: 0.8,
      random: {
        enable: true,
        minimumValue: 0.4
      }
    }
  }
    
    }} />

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

            } } />
          and many more languages/frameworks!
        </p>
        </div>
        ⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀
        <div className="button-proceed-homepage">
        <ReactBubblyEffectButton text="About Me" color='#fff' bgColor='#ff0081' onClick={onClick} />
        </div>
        </FadeIn>
      </header>
    </div></>

  );
}
const onClick = () => {
  console.log('Done.')
}

export default App;
