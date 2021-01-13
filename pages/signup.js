import React, {useState, useCallback} from 'react';
import { Form, FormLayout, Page, Layout, Card, TextField, Button, Icon, DisplayText, Link } from '@shopify/polaris';
import {IoIosContact } from "react-icons/io";

export default function Signup() {
    const [userFirestName,setUserFirestName] = useState('');
    const [userLastName,setUserLastName] = useState('');
    const [userName,setUserName] = useState('');
    const [userPass,setUserPass] = useState('');
    const api_key = 'ec7e1b0e4f4879ac841ef8579cd77b9d';
    const api_sec_key = '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';
    
    const handleSingupSubmit = useCallback((_event) => {
        setIsUserLogged(true)
        setUserFirestName('')
        setUserLastName('')
        setUserName('')
        setUserPass('')
    }, []);
    const handleUserFirstNameChange = useCallback((value) => setUserFirestName(value),[],);
    const handleUserLastNameChange = useCallback((value) => setUserLastName(value),[],);
    const handleUsernameChange = useCallback((value) => setUserName(value),[],);
    const handleUserpassChange = useCallback((value) => setUserPass(value),[],);
  return (
    <Page>
        <Layout>
            <Card sectioned>
                <Form name="signup-form" onSubmit={handleSingupSubmit}>
                    <FormLayout>
                        <Icon source={IoIosContact} backdrop={false} />
                        <DisplayText size="medium">Sign Up</DisplayText>
                        <FormLayout.Group condensed>
                            <TextField
                                name="userFirestName"
                                type="text"
                                placeholder="First Name *"
                                value={userFirestName}
                                onChange={handleUserFirstNameChange}
                            />
                            <TextField
                                name="userLastName"
                                type="text"
                                placeholder="Last Name "
                                value={userLastName}
                                onChange={handleUserLastNameChange}
                            />
                        </FormLayout.Group>
                        
                        <TextField
                            name="userName"
                            type="email"
                            placeholder="Email Address *"
                            value={userName}
                            onChange={handleUsernameChange}
                        />
                        <TextField
                            name="userPass"
                            type="password"
                            placeholder="Password *"
                            value={userPass}
                            onChange={handleUserpassChange}
                        />
                        <Button name="signup" size="medium" primary={true}>SIGN UP</Button>
                        <Link url="/signin" >have an account? Sign In</Link>
                    </FormLayout>
                </Form>
            </Card>
        </Layout>    
    </Page>
  );
}