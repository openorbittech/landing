"use client";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/Lottie2.json";

export default function HeroLottie() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient || !animationData) {
        return <div style={{ width: 400, height: 400 }} />;
    }

    // Handle potential CJS/ESM interop issues where Lottie might be { default: Lottie }
    const LottieComponent = (Lottie as any).default || Lottie;

    return (
        <div className="w-[600px] h-[600px] lg:block hidden relative group">
            <div className="absolute ">
                <LottieComponent
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                />
            </div>
        </div>
    );
}