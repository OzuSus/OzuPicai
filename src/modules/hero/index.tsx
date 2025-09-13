'use client';
import React from 'react';
import {motion} from 'framer-motion';
import {ArrowRight, Play, Sparkle} from "lucide-react";
import {Button} from "@/components/ui/button";
import BeforeAfterSlider from "@/modules/hero/BeforeAfterSlider";

const Hero = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/*    Backgroind gradient*/}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-50"/>
            {/*    floating object*/}
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"/>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
                 style={{animationDelay: '-1s'}}/>

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/*    Left content*/}
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                    className="text-center lg:text-left"
                >
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.2}}
                        className="inline-flex items-center space-x-2 bg-gradient-glass rounded-full px-2 py-2 mb-6 glass border border-card-border"
                    >
                        <Sparkle className="h-4 w-4 text-primary"/>
                        <span className="text-sm font-medium">OzuPicai</span>
                    </motion.div>
                    <motion.h1
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.3}}
                        className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
                    >
                        <span className="bg-gradient-primary !bg-clip-text text-transparent">
                            OzuPicai
                        </span>
                        <br/>
                        <span className="text-foreground">The Ultimate Picture Edit AI</span>
                    </motion.h1>
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.4}}
                        className="text-xl text-muted-foreground mb-8 max-w-2xl"
                    >
                        An AI-powered photo editing platform that lets you enhance, retouch, and transform images
                        instantly with just a few clicks. Simple, fast, and smart editing for everyone.
                    </motion.p>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.5}}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <Button
                            variant="hero"
                            size="lg"
                            onClick={() => scrollToSection("editor")}
                            className="group text-white"
                        >
                            <Play className="h-5 w-5 mr-2 group-hover:animate-pulse"/>
                            Try For Free
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={() => scrollToSection("editor")}
                            className="group"
                        >
                            Launch App
                            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"/>
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.6}}
                        className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground"
                    >
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                            <span>Unlimited uploads on Pro</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"/>
                            <span>Unlimited Edits</span>
                        </div>
                    </motion.div>
                </motion.div>

            {/*    Righr content - Before/After Slider*/}
                <motion.div
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8, delay: 0.2}}
                    className="flex justify-center"
                >
                    <BeforeAfterSlider/>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;