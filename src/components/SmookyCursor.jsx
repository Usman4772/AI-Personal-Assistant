"use client"

import { useEffect, useRef } from "react"

export default function SmokyCursor() {
    const cursorRef = useRef(null)
    const trailsRef = useRef([])
    const mousePos = useRef({ x: 0, y: 0 })
    const trails = useRef([])

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY }

            // Add new trail point
            trails.current.unshift({
                x: e.clientX,
                y: e.clientY,
                opacity: 1,
                scale: 1,
            })

            // Limit trail length
            if (trails.current.length > 15) {
                trails.current.pop()
            }
        }

        const animateTrails = () => {
            // Update main cursor
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${mousePos.current.x - 25}px, ${mousePos.current.y - 25}px)`
            }

            // Update trails
            trails.current.forEach((trail, index) => {
                trail.opacity *= 0.85
                trail.scale *= 0.95

                const trailElement = trailsRef.current[index]
                if (trailElement) {
                    trailElement.style.transform = `translate(${trail.x - 30}px, ${trail.y - 30}px) scale(${trail.scale})`
                    trailElement.style.opacity = trail.opacity.toString()
                }
            })

            // Remove faded trails
            trails.current = trails.current.filter((trail) => trail.opacity > 0.01)

            requestAnimationFrame(animateTrails)
        }

        document.addEventListener("mousemove", handleMouseMove)
        animateTrails()

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            {/* Main cursor dot */}
            <div
                ref={cursorRef}
                className="fixed w-3 h-3 bg-black rounded-full mix-blend-difference transition-transform duration-75 ease-out"
                style={{ transform: "translate(-50%, -50%)" }}
            />

            {/* Smoky trails */}
            {Array.from({ length: 15 }, (_, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        if (el) trailsRef.current[i] = el
                    }}
                    className="fixed w-16 h-16 rounded-full pointer-events-none"
                    style={{
                        background: `radial-gradient(circle, rgba(0,0,0,${0.3 - i * 0.02}) 0%, rgba(0,0,0,${0.1 - i * 0.007}) 40%, transparent 70%)`,
                        filter: "blur(8px)",
                        transform: "translate(-50%, -50%)",
                    }}
                />
            ))}

            {/* Additional smoky layer */}
            {Array.from({ length: 8 }, (_, i) => (
                <div
                    key={`smoke-${i}`}
                    ref={(el) => {
                        if (el) trailsRef.current[i + 15] = el
                    }}
                    className="fixed w-24 h-24 rounded-full pointer-events-none"
                    style={{
                        background: `radial-gradient(circle, rgba(0,0,0,${0.15 - i * 0.015}) 0%, rgba(0,0,0,${0.05 - i * 0.005}) 50%, transparent 80%)`,
                        filter: "blur(16px)",
                        transform: "translate(-50%, -50%)",
                    }}
                />
            ))}
        </div>
    )
}
