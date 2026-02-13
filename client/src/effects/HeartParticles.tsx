import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const HeartParticles = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: {
                enable: true,
                zIndex: -1
            },
            particles: {
                number: {
                    value: 30,
                },
                color: {
                    value: ["#ff6b81", "#ff4757", "#ffffff"],
                },
                shape: {
                    type: "char",
                    options: {
                        char: [
                            {
                                value: ["❤", "♥"],
                                font: "Verdana",
                                style: "",
                                weight: "400",
                                fill: true
                            }
                        ]
                    }
                },
                opacity: {
                    value: { min: 0.3, max: 0.8 },
                    animation: {
                        enable: true,
                        speed: 0.5,
                        sync: false,
                    },
                },
                size: {
                    value: { min: 10, max: 30 },
                    animation: {
                        enable: true,
                        speed: 2,
                        sync: false,
                    },
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "top",
                    random: true,
                    straight: false,
                    outModes: {
                        default: "out",
                    },
                },
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "bubble",
                    },
                },
                modes: {
                    bubble: {
                        distance: 200,
                        duration: 2,
                        size: 40,
                        opacity: 1,
                    },
                },
            },
            background: {
                color: "transparent"
            }
        }),
        [],
    );

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={options}
            className="absolute inset-0 -z-10"
        />
    );
};

export default HeartParticles;
