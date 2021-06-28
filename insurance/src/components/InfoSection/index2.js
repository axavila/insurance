import React from 'react';
import {Button} from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap2, Img } from './InfoElements';


const InfoSection2 = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2, description1, description2}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <Subtitle darkText={darkText}>{description1}</Subtitle>
                        <Subtitle darkText={darkText}>{description2}</Subtitle>
                        {/* <BtnWrap>
                            <Button to="home"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                            >{buttonLabel}</Button>
                        </BtnWrap> */}
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap2>
                        <Img src={img} alt={alt}/>
                        </ImgWrap2>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
            
        </>
    )
}

export default InfoSection2
