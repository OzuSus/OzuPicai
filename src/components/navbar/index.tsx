'use client';
import React, {useState} from 'react';
import {useSession} from "next-auth/react";
import {motion} from "framer-motion";
import {Sparkle} from "lucide-react";
import {Button} from "@/components/ui/button";
import {signIn} from "next-auth/react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const {data: session} = useSession();

    function scrollToSection(sectionId: String) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
            setIsMobileMenuOpen(false);
        }
    }

    const handleSubmit = async () => {
        if (session?.user) {
            scrollToSection("editor");
        } else {
            await signIn("google");
        }
    }

    return (
        <motion.nav
            initial={{y: -100}}
            animate={{y: 0}}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "glass border-b border-card-border backdrop-blur-glass"
                    : "bg-transparent"
            }`}
        >
            {/*Logo*/}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        className="flex items-center space-x-2 cursor-pointer"
                        whileHover={{scale: 1.05}}
                        onClick={() => scrollToSection("hero")}
                    >
                        <div className="relative">
                            <Sparkle fill="transparent" className="h-8 w-8 text-primary animate-glow-pulse"/>
                            <div className="absolute inset-0 h-8 w-8 text-secondary animate-glow-pulse opacity-50 "/>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-primary !bg-clip-text text-transparent">OzuPicai</span>
                    </motion.div>

                    {/*Navigation*/}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection("features")}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection("pricing")}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                            Pricing
                        </button>
                        <Button variant="hero" className="w-full font-semibold" onClick={handleSubmit}>
                            {session?.user ? 'Launch App' : 'Sign In'}
                        </Button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;