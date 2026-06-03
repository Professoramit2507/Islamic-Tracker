import React from 'react';
import Hero from '../HeroComponents/Hero/Hero';
import About from '../HeroComponents/About/About';
import HowItWorks from '../HeroComponents/Works/Works';
import CoreFeatures from '../HeroComponents/CoreFeatures/CoreFeatures';
import WhyThisApp from '../HeroComponents/Why/WhyThisApp';
import StatsSection from '../HeroComponents/Stat/StatsSection';

const Landing = () => {
    return (
        <div>
            <Hero></Hero>
            {/* <HowItWorks></HowItWorks> */}
            <CoreFeatures></CoreFeatures>
            <WhyThisApp></WhyThisApp>
            <StatsSection></StatsSection>
            <About></About>
        </div>
    );
};

export default Landing;