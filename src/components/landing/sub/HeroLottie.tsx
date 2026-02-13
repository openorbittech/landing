import { useEffect, useRef } from "react";

export default function HeroLottie() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animation: any;

        import("lottie-web").then((lottie) => {
            if (!containerRef.current) return;

            fetch("/LottieHeroAnimation.json")
                .then((res) => res.json())
                .then((data) => {
                    if (!containerRef.current) return;

                    animation = lottie.default.loadAnimation({
                        container: containerRef.current,
                        renderer: "svg",
                        loop: true,
                        autoplay: true,
                        animationData: data,
                    });
                });
        });

        return () => {
            if (animation) {
                animation.destroy();
            }
        };
    }, []);


    return <div ref={containerRef} className="absolute inset-0" />;
}
