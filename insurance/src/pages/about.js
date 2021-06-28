import React, {useState} from 'react';
import Sidebar from '../components/SideBar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection/index2';
import { homeObjFive, homeObjFour, homeObjOne, homeObjSix, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';
import Navbar2 from '../components/Navbar/index2';
import SectionAbout from '../components/HeroSection/index2';
import SectionAbout2 from '../components/HeroSection/index3';

const Aboutus = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }




    return (
        <>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar2 toggle={toggle} />
            {/* <HeroSection /> */}
            <SectionAbout />
            <InfoSection {...homeObjFive}/>
            <InfoSection2 {...homeObjSix}/>
            {/* <SectionAbout2 /> */}
            <Footer/>
            
        </>
    );
    // const [isOpen, setIsOpen] = useState(false)

    // const toggle = () => {
    //     setIsOpen(!isOpen)
    // }




    // return (
    //     <>
    //         <Navbar toggle={toggle} />
    //         <Sidebar isOpen={isOpen} toggle={toggle} />
            
    //         <Contact/>

    //         <Footer/>
            
            
            
            
            
            
           
            
    //     </>
    // );
};

export default Aboutus;