import React,{ Component } from 'react';
import {
    Input,
} from 'react-dom';

import { 
    Layout,
    Card,
    Form,
    FormLayout,
    TextField,
    Button,
} from '@shopify/polaris';

export default class CrawlUrl extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <Layout.AnnotatedSection
                    title="Extract Product"
                    description="With the help of scrap url you can get product from here to your shop"
                >
                    <Card sectioned>
                        <Form>
                            <FormLayout>
                                <TextField
                                    label="Past URL"
                                    name="search"
                                    type="text"
                                />
                                <Button icon="" primary={true}>Extract</Button>
                            </FormLayout>
                        </Form>
                    </Card>
                </Layout.AnnotatedSection>
        );
    }
}