import React,{ useState,useCallback } from 'react';
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
    ChoiceList,
    MediaCard,
} from '@shopify/polaris';
import axios from 'axios';

export default function CrawlUrl(){
    const [searchUrl,setSearchUrl] = useState('');
    const handleSearchChange = useCallback((value) => setSearchUrl(value),[],);
    const [selectedEcom, setSelectedEcom] = useState(['ebay']);
    const handleChangeEcom = useCallback((value) => setSelectedEcom(value), []);

    const handleFecthProductSubmit = useCallback( async (_event) => {
        
        const response = await axios({
            url : '/detail',
            method:'post',
            baseURL:'http://204.44.125.73:8000/data',
            params:{
                url:searchUrl,
                ecom:selectedEcom[0]
            }
        });
        
        console.log(response)
    })
     
    return(
            <div>
            <Layout.AnnotatedSection
                title="Extract Product"
                description="With the help of scrap url you can get product from here to your shop"
            >
                <Card sectioned>
                    <Form name="product-fetch-form" onSubmit={handleFecthProductSubmit} method="post">
                        <FormLayout>
                            <ChoiceList
                            title="ECOM"
                            choices={[
                                {label: 'Ebay', value: 'ebay'},
                                {label: 'Sams', value: 'sams'},
                                {label: 'Boscovs', value: 'boscovs'},
                                {label: 'Home', value: 'home'},
                                {label: 'BedBath', value: 'bedbath'},
                                {label: 'WalMart', value: 'walmart'}
                            ]}
                            name="ecom"                            
                            selected={selectedEcom}
                            onChange={handleChangeEcom}
                            />
                            <TextField
                                label="Paste URL Here"
                                name="searchUrl"
                                type="text"
                                value={searchUrl}
                                onChange={handleSearchChange}
                            />
                            <Button icon="" primary={true} name="fetchproduct" submit="true">Extract</Button>
                        </FormLayout>
                    </Form>
                </Card>
            </Layout.AnnotatedSection>
            <Layout sectioned={true}>
                <Layout.Section>
                <MediaCard
                    title="This is product title"
                    primaryAction={{
                        content: 'Import It',
                        onAction: () => {},
                    }}
                    description="This will be default product description if any"
                    size="small"
                >
                    <div>
                    <img
                        alt=""
                        width="100%"
                        height="100%"
                        style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        }}
                        src="https://burst.shopifycdn.com/photos/smiling-businesswoman-in-office.jpg?width=1850"
                    />
                    <div>Price : $ 125.00</div>
                    </div>
                </MediaCard>
                </Layout.Section>
            </Layout>
            
            </div>
    );
}