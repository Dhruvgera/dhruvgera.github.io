import './App.css';
import './index.css'
import RepoCard from "react-repo-card";
import ReactBubblyEffectButton from "react-bubbly-effect-button";
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

function Work() {
    return (
        <div className="App">
            <header className="App-header">
                <FadeIn delay={1200}>
                    <div>
                        <p className="name-color">Some of my works include: </p>
                    </div>
                    <div>
                        <div className='inline-block' style={{ width: "405px" }}>
                            <RepoCard username="dhruvgera" repository="custom_python_scripts" />
                        </div>
                        <div className='inline-block' style={{ width: "405px" }}>
                            <RepoCard username="dhruvgera" repository="Rockstarkernel_WSL2" />
                        </div>
                        <div>
                            <div className='inline-block' style={{ width: "405px" }}>
                                <RepoCard username="dhruvgera" repository="Rockstarkernel_beryllium" />
                            </div>
                            <div className='inline-block' style={{ width: "405px" }}>
                                <RepoCard username="dhruvgera" repository="cygnuswalls" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='align-left'>
                            Other noteable projects:
                        </p>
                        <div className='container'>
                            <p className="subtext-list">
                                • <a href="https://cygnusos.com" >cygnusos.com</a>
                                <br></br>
                                • <a href="https://web.archive.org/web/20211120172507/https://spadebee.com/">spadebee.com ( now taken down )</a>
                                <br></br>
                                • <a href="https://wehumans.ro.nf">wehumans.ro.nf</a>
                                <br></br>
                                • This website
                                <br></br>
                                And many more projects for clients!
                                <br></br>
                                There‘s more on my <a href="https://github.com/dhruvgera">GitHub</a> account! Some of my work is on organisations where I work with other people.
                            </p>
                        </div>
                        <br></br>
                        <div>
                            <Link to="/Contactme"><ReactBubblyEffectButton text="Contact Me" color='#fff' bgColor='#ff0081' /></Link>
                        </div>
                    </div>
                </FadeIn>
            </header>
        </div>
    );
}

export default Work;