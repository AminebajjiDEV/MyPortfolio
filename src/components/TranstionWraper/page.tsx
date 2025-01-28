"use client"

import { useEffect, useRef, useState } from "react"
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);


export default function TranstionWraper({ children }: any) {
    const [displayChildren, setDisplayChildren] = useState(children);
    const container = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (children.key !== displayChildren.key) {
            gsap.to(container.current, { opacity: 0 }).then(() => {
                setDisplayChildren(children)
                window.scrollTo(0, 0);
                gsap.to(container.current, { opacity: 1 })
            })
        }
    }, [children])

    return (
        <div ref={container}>
            {displayChildren}
        </div>
    )
}