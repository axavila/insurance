import React, {useState} from 'react';
import { Button } from '../ButtonElements';

import {HeroContainer, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
           <HeroContent>
               <HeroH1>We are your Vlife Insurance Agency</HeroH1>
               <HeroP>
                   Insurance is protecting them.
               </HeroP>
               <HeroBtnWrapper>
                   <Button to='contactus' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                       Get started {hover ? <ArrowForward /> : <ArrowRight />}
                   </Button>
               </HeroBtnWrapper>
           </HeroContent>
            
        </HeroContainer>
    ); 
}

export default HeroSection;
