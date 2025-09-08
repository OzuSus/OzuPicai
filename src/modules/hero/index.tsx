'use client';
import React from 'react';
import {motion} from 'framer-motion';

const Hero = () => {
    const scrollToSection = (sectionId: string)=> {
        const element = document.getElementById(sectionId);
        if (element){
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return(
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/*    Backgroind gradient*/}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-50"/>
        {/*    floating object*/}
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"/>

        </section>
    );
};

export default Hero;