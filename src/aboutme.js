import './App.css';
import './index.css'
import ReactBubblyEffectButton from "react-bubbly-effect-button";
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

function Aboutme() {
    return (
        <div className="App">
            <header className="App-header">
                <FadeIn delay={1200}>
                    <div>
                        <p className='container-aboutme'>
                            <p>
                                Starting off as a person with interest in Ethical Hacking at 13 years old, I proceeded to dabble into software development.
                                Consequently, I learnt many langauges such as <a className="highlight-color">Python, Java, Javascript, Flutter</a> and many more.
                            </p>
                            <p>
                                I have worked on the <a className="highlight-color">Linux Kernel</a> extensively for more than <a className="highlight-color">5 years</a>,
                                as well as on the <a className="highlight-color">Android source code</a> published by Google
                                under AOSP!
                            </p>
                            <p>
                                Apart from all these, I also have coded many <a className="highlight-color">Android Apps</a> for clients,
                                as well as Websites ranging from simple <a className="highlight-color">Wordpress</a> like CMS as well as
                                custom ones made from scratch in <a className="highlight-color">React</a> and other frameworks!
                                <p>
                                    I am also currently trying to find my way with <a className="highlight-color">Solana</a> and other <a className="highlight-color">Web3 </a>
                                    technologies! A <a className="highlight-color">full stack developer</a> indeed!
                                </p>
                            </p>
                        </p>
                    </div>
                    ⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀
                    <div>
                        <Link to="mywork"><ReactBubblyEffectButton text="My Work" color='#fff' bgColor='#ff0081' /></Link>
                    </div>
                </FadeIn>
            </header></div>
    );

}

export default Aboutme