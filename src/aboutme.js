import './App.css';
import './index.css'
import ReactBubblyEffectButton from "react-bubbly-effect-button";
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

function Aboutme() {
    window.scrollTo(0, 0)
    return (
        <div className="App">
            <header className="App-header">
                <FadeIn delay={500}>
                    <div>
                        <p className='container-aboutme'>
                            <p>
                                Starting off as a person with interest in Ethical Hacking at 13 years old, I proceeded to dabble into software development.
                                Consequently, I learnt many langauges such as <a className="highlight-color"><b>Python, Java, Javascript, Flutter</b></a> and many more.
                            </p>
                            <p>
                                I have worked on the <a className="highlight-color"><b>Linux Kernel</b></a> extensively for more than <a className="highlight-color"><b>5 years</b></a>,
                                as well as on the <a className="highlight-color"><b>Android source code</b></a> published by Google
                                under AOSP!
                            </p>
                            <p>
                                Apart from all these, I also have coded many <a className="highlight-color"><b>Android Apps</b></a> for clients,
                                as well as Websites ranging from simple <a className="highlight-color"><b>Wordpress</b></a> like CMS as well as
                                custom ones made from scratch in <a className="highlight-color">React</a> and other frameworks!
                                <p>
                                    I am also currently trying to find my way with <a className="highlight-color"><b>Solana</b></a> and other <a className="highlight-color"><b>Web3 </b></a>
                                    technologies! A <a className="highlight-color"><b>full stack developer</b></a> indeed!
                                </p>
                            </p>
                        </p>
                    </div>
                    <div>
                        <br></br>
                        <br></br>
                        <Link to="/Work"><ReactBubblyEffectButton text="My Work" color='#fff' bgColor='#ff0081' /></Link>
                    </div>
                </FadeIn>
            </header></div>
    );

}

export default Aboutme