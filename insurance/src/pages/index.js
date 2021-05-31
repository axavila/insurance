import React, {useState} from 'react';
import Sidebar from '../components/SideBar';
import Navbar from '../components/Navbar';
import Hero from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

import {SliderData} from '../data/SliderData';

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
            {/* <Hero slides={SliderData}/> */}
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjOne}/>
            
            <InfoSection {...homeObjThree}/>
            <Footer/>
            
        </>
    );
};

export default Home;
