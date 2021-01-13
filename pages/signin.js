import React, {useState, useCallback} from 'react';
import {Form, Page, FormLayout, Layout, Card, TextField, Button, Icon, DisplayText, Link } from '@shopify/polaris';
import {IoMdLock } from "react-icons/io";


export default function Login() {
    const [isUserLogged,setIsUserLogged] = useState(false);
    const [userName,setUserName] = useState('');
    const [userPass,setUserPass] = useState('');
    console.log(process.env.SHOPIFY_API_KEY)
    console.log(process.env.SHOPIFY_API_SECRET_KEY)
    
    
    const handleSigninSubmit = useCallback((_event) => {
        setIsUserLogged(true)
        setUserName('')
        setUserPass('')
    }, []);
    const handleUsernameChange = useCallback((value) => setUserName(value),[],);
    const handleUserpassChange = useCallback((value) => setUserPass(value),[],);
  return (
        <Page>
            <Layout>
                <Card sectioned>
                    <Form name="signin-form" onSubmit={handleSigninSubmit}>
                        <FormLayout>
                            <Icon source={IoMdLock} backdrop={false} />
                            <DisplayText size="medium">Sign In</DisplayText>
                            <TextField
                                name="userName"
                                type="email"
                                placeholder="Email Address *"
                                onChange={handleUsernameChange}
                                value={userName}
                            />
                            <TextField
                                name="userPass"
                                type="password"
                                placeholder="Password *"
                                onChange={handleUserpassChange}
                                value={userPass}
                            />
                            <Button icon="" name="login" size="medium" primary={true}>SIGN IN</Button>
                            <Link url="/resetpass">Forgot Password?</Link><Link url="/signup" >Don't have an account? Sign Up</Link>
                        </FormLayout>
                    </Form>
                </Card>
            </Layout>
        </Page>    
  );
}