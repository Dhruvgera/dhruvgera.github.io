import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function Background() {
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
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 60,
                background: {
                    color: "#202124"
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
    );

}

export default Background;