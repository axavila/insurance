import React, {useState} from 'react';
import { Button } from '../ButtonElements';
import ImgBg from '../../images/datasix1.png';

import {HeroContainer, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, HeroSection, HeroWrapper, HeroImage} from './HeroElements';


const SectionAbout2 = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroSection>
                <HeroWrapper>
                    <HeroImage src={ImgBg}>

                    </HeroImage>
                </HeroWrapper>
        </HeroSection>
        // <HeroContainer>
        //    {/* <HeroContent> */}
        //        {/* <HeroH1>We are your Vlife Insurance Agency</HeroH1>
        //        <HeroP>
        //            Insurance is protecting them.
        //        </HeroP>
        //        <HeroBtnWrapper>
        //            <Button to='./contactus' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
        //                Get started {hover ? <ArrowForward /> : <ArrowRight />}
        //            </Button>
        //        </HeroBtnWrapper> */}
        //    {/* </HeroContent> */}
            
        // {/* </HeroContainer> */}
    ); 
}

export default SectionAbout2;

