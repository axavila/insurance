import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './ContactElements'

const Contact = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    {/* <Icon to="/insurance">Vlife</Icon> */}
                    <FormContent>
                        <Form action="#">
                            <FormH1>Contact us</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
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
