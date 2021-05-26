import React, {useState} from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './ContactElements'

const Contact = () => {
    const [data, setData] = useState ({
        name: "",
        email: "",
        phone: "",
    });

    const {name, email, phone} = data;

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
                body: JSON.stringify([[name, email, phone, new Date().toLocaleString()]])
            
            }
            
            );
            await response.json();
            setData({...data, name: '', email: '', phone: ''});

        } catch (err) {
            console.log(err)
            
        }
    };


    return (
        <>
            <Container>
                <FormWrap>
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
                            <FormButton type='submit'>Continue</FormButton>
                            {/* <Text>Forgot Password</Text> */}

                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            
        </>
    );
};

export default Contact;
