import React, {useState} from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text, Column1, Column2, InfoWrapper, InfoRow, ServicesH2, ServicesP, ServicesH1, TextWrapper, FormInput1} from './ContactElements'

const Contact = () => {
    const [data, setData] = useState ({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const {name, email, phone, message} = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://v1.nocodeapi.com/axavila20/google_sheets/jjBMlWHfnDgIqpBe?tabId=Sheet1' , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([[name, email, phone, message, new Date().toLocaleString()]])
            
            }
            
            );
            await response.json();
            setData({...data, name: '', email: '', phone: '', message:''});

        } catch (err) {
            console.log(err)
            
        }
    };


    return (
        <>
            
            <Container>
                
                {/* <FormWrap> */}

                <InfoWrapper>

                    <InfoRow>
                        <Column1>
                    {/* <Icon to="/insurance">Vlife</Icon> */}
                    <FormContent>
                        
                        <Form onSubmit= {handleSubmit}>
                            <FormH1>Contact us</FormH1>
                            <FormLabel htmlFor='for'>Name</FormLabel>
                            <FormInput input type='text' required 
                                        name= 'name'
                                        value= {name}
                                        onChange={handleChange}
                            />
                            <FormLabel htmlFor='for'>Phone Number</FormLabel>
                            <FormInput input type='number' required 
                                        name= 'phone'
                                        value= {phone}
                                        onChange={handleChange}
                            />
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput input type='email' required 
                                        name= 'email'
                                        value= {email}
                                        onChange={handleChange}
                            />
                            <FormInput1 textarea 
                                        name= 'message'
                                        rows="5"
                                        value= {message}
                                        onChange={handleChange}
                                        placeholder='Message'
                            />
                            <FormButton type='submit'>Continue</FormButton>
                            {/* <Text>Forgot Password</Text> */}

                        </Form>
                        
                        
                    </FormContent>
                    </Column1>
                    <Column2>
                    <TextWrapper>
                    <ServicesH1>Contact information</ServicesH1>
                    <ServicesH2>Address</ServicesH2>
                    <ServicesP>3404 W 109TH PLACE Hialeah, Florida, Estados Unidos</ServicesP>
                    <br></br>
                    <ServicesH2>Email</ServicesH2>
                    <ServicesP>mkt@vlifeinsurances.com</ServicesP>
                    <br></br>
                    <ServicesH2>Call us</ServicesH2>
                    <ServicesP>+1 800-842-8260</ServicesP>
                    </TextWrapper>
                    </Column2>
                    
                {/* </FormWrap> */}
                </InfoRow>

                </InfoWrapper>
            </Container>
            
        </>
    );
};

export default Contact;
