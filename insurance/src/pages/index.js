import React, {useState} from 'react';
import Sidebar from '../components/SideBar';
import Navbar from '../components/Navbar';
import Hero from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

import {SliderData} from '../data/SliderData';
import Contact from '../components/Contact';
import contactp from '../components/Contact/contact';
import ContactP from '../components/Contact/contact';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }




    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero slides={SliderData} />
           
            <InfoSection {...homeObjFour}/>
            
            <Services/>
            <InfoSection {...homeObjOne}/>
            
            
            <ContactP />
            <Footer/>
            
        </>
    );
};

export default Home;
