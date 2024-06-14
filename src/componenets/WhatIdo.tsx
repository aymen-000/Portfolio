import  { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Cards from './Cards';
import servicesData from '../data/data.json';
function WhatIdo() {
    const [showCards, setShowCards] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) {
                setShowCards(true);
            } else {
                setShowCards(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const animationProps = useSpring({
        opacity: showCards ? 1 : 0,
        transform: showCards ? 'translateY(0)' : 'translateY(50px)',
    });

    return (
        <div className="container mx-auto px-4 py-8 rounded-lg" id="services">
            <div className="text-center my-4">
                <h1 className="font-inter text-3xl font-bold text-white">What I Do</h1>
                <h2 className="font-poppins font-semibold text-[15px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    My Services
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData.services.map((service, index) => (
                    <animated.div key={index} style={animationProps}>
                        <Cards icon={service.icon} title={service.title} text={service.text} />
                    </animated.div>
                ))}
            </div>
            
        </div>
    );
}

export default WhatIdo