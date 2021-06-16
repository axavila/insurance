import React, {useState} from 'react';
import Sidebar from '../components/SideBar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjFive, homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';
import Navbar2 from '../components/Navbar/index2';

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
            <InfoSection {...homeObjFive}/>
            
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