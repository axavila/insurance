import React, {useState} from 'react';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text, Column1, Column2, InfoWrapper, InfoRow, ServicesH2, ServicesP, ServicesH1, TextWrapper, Form1, Container1, FormH11, Form2, FormInput1} from './ContactElements'

const ContactP = () => {
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
            const response = await fetch('https://v1.nocodeapi.com/axavila20/google_sheets/jjBMlWHfnDgIqpBe?tabId=Sheet1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([[name, email, phone, message, new Date().toLocaleString()]])
            
            }
            
            );
            await response.json();
            setData({...data, name: '', email: '', phone: '', message: ''});

        } catch (err) {
            console.log(err)
            
        }
    };


    return (
        <>
            
            <Container1>
                
                {/* <FormWrap> */}
                    
                <InfoWrapper>
                        
                    <InfoRow>
                        
                    {/* <Icon to="/insurance">Vlife</Icon> */}
                    <FormContent>
                    <Form2>
                            <FormH11><div>Contact Us<br /><br /><hr></hr></div></FormH11>
                        </Form2>
                        <Form1 onSubmit= {handleSubmit}>
                            
                            {/* <FormLabel htmlFor='for'>Name</FormLabel> */}
                            <FormInput input type='text' required 
                                        name= 'name'
                                        value= {name}
                                        onChange={handleChange}
                                        placeholder='Name'
                            />
                            {/* <FormLabel htmlFor='for'>Phone Number</FormLabel> */}
                            <FormInput input type='number' required 
                                        name= 'phone'
                                        value= {phone}
                                        onChange={handleChange}
                                        placeholder='Phone Number'
                            />
                            {/* <FormLabel htmlFor='for'>Email</FormLabel> */}
                            <FormInput input type='email' required 
                                        name= 'email'
                                        value= {email}
                                        onChange={handleChange}
                                        placeholder='Email'
                            />
                            <FormInput1 textarea 
                                        name= 'message'
                                        rows="5"
                                        value= {message}
                                        onChange={handleChange}
                                        placeholder='Message'
                            />
                            <FormButton type='submit'>Send Email</FormButton>
                            {/* <Text>Forgot Password</Text> */}

                        </Form1>
                        
                        
                    </FormContent>
                    
                    
                   
                    
                
                </InfoRow>

                </InfoWrapper>
                {/* </FormWrap> */}
            </Container1>
            
        </>
    );
};

export default ContactP
