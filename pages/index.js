import React from 'react';
import {
  Page,
  Frame,
  Layout,
} from '@shopify/polaris';

import SettingForm from '../components/SettingForm';
import CrowlUrl from '../components/CrawlUrl';
import NarvigationBar from '../components/NavigationBar';

export default function App() {
  return (
    <Frame
        navigation={NarvigationBar}
    >
            <Page
            title="Polaris"
            >
                <Layout>
                    <SettingForm />
                    <CrowlUrl/>
                </Layout>
                
            </Page>
    </Frame>
  );
}