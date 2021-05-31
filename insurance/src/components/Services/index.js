import React from 'react';
import Icon1 from '../../images/number1.svg';
import Icon2 from '../../images/number2.svg';
import Icon3 from '../../images/number3.svg';
import Icon4 from '../../images/number4.svg';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';
 
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Benefits</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>GROWTH</ServicesH2>
                    <ServicesP>Growth potential with multiple index account options</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>SAFETY</ServicesH2>
                    <ServicesP>Guaranteed principal</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>INCOME FOR LIFE</ServicesH2>
                    <ServicesP>Options available to receive income for life</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>DEATH BENEFIT</ServicesH2>
                    <ServicesP>Annuitant driven</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
