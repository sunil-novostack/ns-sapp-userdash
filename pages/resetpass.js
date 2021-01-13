import React, {useState, useCallback} from 'react';
import {
  Form,
  Page,
  FormLayout,
  Layout,
  Card,
  TextField,
  Button,
  DisplayText,
  TextContainer,
  Navigation,
} from '@shopify/polaris';
import {IoMdArrowBack } from "react-icons/io";

export default function resetpass() {
    const [userName,setUserName] = useState('');
    
    const handlePasswordResetSubmit = useCallback((_event) => {
        setUserName('')
    }, []);
    const handleUsernameChange = useCallback((value) => setUserName(value),[],);
  return (
        <Page>
            <Layout>
                <Card sectioned>
                    <Form name="resetpass-form" onSubmit={handlePasswordResetSubmit}>
                        <Navigation location="/resetpass">            
                            <Navigation.Section
                                items={[
                                    {
                                        label: 'Back to Login',
                                        icon: IoMdArrowBack,
                                        url:'/signin',
                                    },
                                ]}
                            />
                        </Navigation>
                        <FormLayout>
                            <DisplayText size="small">Reset Password</DisplayText>
                            <TextField
                                name="userEmail"
                                type="email"
                                placeholder="Email Address *"
                                value={userName}
                                onChange={handleUsernameChange}
                            />
                            <Button name="login" size="medium" primary={true}>RESET</Button>                            
                        </FormLayout>
                    </Form>
                    <TextContainer>
                        <p>By Pressing Button your password will reset with new auto geenrated password which will send on your given email box...</p>
                    </TextContainer>
                </Card>
            </Layout>
        </Page>    
  );
}