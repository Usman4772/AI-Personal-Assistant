"use client"

import { useEffect, useRef } from "react"




export default function ParticlesBackground({ className = "" }) {
    const particlesRef = useRef(null)

    useEffect(() => {
        // Load particles.js script
        const script = document.createElement("script")
        script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        script.async = true

        script.onload = () => {
            if (window.particlesJS && particlesRef.current) {
                // Initialize particles with your configuration
                window.particlesJS("particles-js", {
                    particles: {
                        number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: "#ffffff",
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#000000",
                            },
                            polygon: {
                                nb_sides: 5,
                            },
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#000000",
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 6,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                        },
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "grab",
                            },
                            onclick: {
                                enable: true,
                                mode: "push",
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 140,
                                line_linked: {
                                    opacity: 1,
                                },
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                            push: {
                                particles_nb: 4,
                            },
                            remove: {
                                particles_nb: 2,
                            },
                        },
                    },
                    retina_detect: true,
                })
            }
        }

        document.head.appendChild(script)

        return () => {
            // Cleanup
            if (document.head.contains(script)) {
                document.head.removeChild(script)
            }
            // Clean up particles instance
            if (window.pJSDom && window.pJSDom[0]) {
                window.pJSDom[0].pJS.fn.vendors.destroypJS()
                window.pJSDom = []
            }
        }
    }, [])

    return (
        <div
            id="particles-js"
            ref={particlesRef}
            className={`absolute inset-0  w-full h-full ${className}`}

        />
    )
}
