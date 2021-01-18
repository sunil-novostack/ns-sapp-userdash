import React,{Component} from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';
import {
  Page,
  Frame,
  Layout,
} from '@shopify/polaris';
import SettingForm from '../components/SettingForm';
import CrowlUrl from '../components/CrawlUrl';
import NarvigationBar from '../components/NavigationBar';


export default class App extends Component{  

  constructor(props) {
    super(props)  
    this.state = {
       isuserLoggedin:false,
       config: {
        apiKey: API_KEY, 
        shopOrigin: Cookies.get('shopOrigin'),
        forceRedirect: true
       }
    }
  }
  componentDidMount(){
    if(!this.state.isuserLoggedin){
      Router.push('/signup')
    }else{

    }
  }
  render(){
    return (
      <Frame>
             
      </Frame>
    );
  }  
}