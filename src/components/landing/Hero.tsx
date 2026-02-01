"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Play, Pause, ChevronDown, Sparkles } from "lucide-react";

// Animated counter hook
const useCounter = (target: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, target, duration]);

  return { count, ref };
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

  const stats = [
    { value: 150, suffix: "+", label: "Projects" },
    { value: 98, suffix: "%", label: "Satisfaction" },
    { value: 12, suffix: "+", label: "Years" },
    { value: 50, suffix: "+", label: "Team" },
  ];

  const { count: projectsCount, ref: projectsRef } = useCounter(150);
  const { count: satisfactionCount, ref: satisfactionRef } = useCounter(98);
  const { count: yearsCount, ref: yearsRef } = useCounter(12);
  const { count: teamCount, ref: teamRef } = useCounter(50);

  const countValues = [projectsCount, satisfactionCount, yearsCount, teamCount];
  const countRefs = [projectsRef, satisfactionRef, yearsRef, teamRef];



  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
      <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover scale-110"
          poster="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=1920&q=80"
        >
          <source 
            src="https://cdn.coverr.co/videos/coverr-coding-on-a-laptop-1584/1080p.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#070A12]/90 via-[#0B0F1C]/70 to-[#070A12]/90" />
        
        {/* Animated mesh gradient overlay */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(79, 109, 255, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(79, 109, 255, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(79, 109, 255, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      {/* Video Controls */}
      <motion.button
        onClick={toggleVideo}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-32 right-8 z-20 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-[#4F6DFF]/30 transition-colors"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white" />
        )}
      </motion.button>

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-20 h-20 border border-[#4F6DFF]/20 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-40 right-20 w-32 h-32 border border-[#4F6DFF]/10 rounded-full hidden lg:block"
      />

      {/* Content */}
      <motion.div
        style={{ 
          opacity, 
          scale
        }}
        className="relative z-10 container mx-auto px-6 pt-32 pb-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Badge */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              >
                <Sparkles className="w-4 h-4 text-[#4F6DFF]" />
                <span className="text-sm font-medium text-[#A7B0C8] font-[family-name:var(--font-dm-sans)]">
                  Now accepting new projects for Q1 2026
                </span>
              </motion.div>

              {/* Main Headline with character animation */}
              <div className="mb-6">
                <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)] leading-none">
                  {"We Build".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: i * 0.05,
                        ease: [0.21, 0.47, 0.32, 0.98]
                      }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.h1>
                
                <motion.div
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="mt-2"
                >
                  <span className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)] gradient-text">
                    Digital Dreams
                  </span>
                </motion.div>
                
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-2"
                >
                  <span className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)] text-white/80">
                    Into Reality
                  </span>
                </motion.div>
              </div>

              {/* Subheadline */}
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-xl text-[#A7B0C8] max-w-lg mb-8 leading-relaxed font-[family-name:var(--font-dm-sans)]"
              >
                Award-winning software agency crafting digital experiences that drive growth and innovation.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2 text-lg group"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="/portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center gap-2 text-lg"
                >
                  View Our Work
                </motion.a>
              </motion.div>
            </div>

            {/* Right Stats Panel */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Glass panel */}
                <div className="glass rounded-3xl p-8 relative overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -right-20 w-40 h-40 bg-[#4F6DFF]/20 blur-[50px]"
                  />
                  
                  <div className="grid grid-cols-2 gap-6 relative z-10">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 1 + index * 0.1,
                          ease: [0.21, 0.47, 0.32, 0.98]
                        }}
                        whileHover={{ 
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                        className="text-center p-4 rounded-2xl bg-white/5 border border-white/10"
                        ref={countRefs[index]}
                      >
                        <div className="text-4xl font-bold text-white mb-1 font-[family-name:var(--font-space-grotesk)] gradient-text">
                          {countValues[index]}{stat.suffix}
                        </div>
                        <div className="text-sm text-[#A7B0C8] font-[family-name:var(--font-dm-sans)]">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -left-4 px-4 py-2 rounded-full bg-[#4F6DFF] text-white text-sm font-medium shadow-lg shadow-[#4F6DFF]/30 font-[family-name:var(--font-dm-sans)]">
                  Fast Delivery
                </div>
                <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-[#00D9FF] text-white text-sm font-medium shadow-lg shadow-[#00D9FF]/30 font-[family-name:var(--font-dm-sans)]">
                  Award Winning
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        >
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-xs uppercase tracking-widest text-[#A7B0C8] mb-2 font-[family-name:var(--font-dm-sans)]">
              Scroll to explore
            </span>
            <ChevronDown className="w-6 h-6 text-[#4F6DFF]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
