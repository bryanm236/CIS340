import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

export default function MyScrollViewApp() {
    const dog = {
      uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png',
      width: 64,
      height: 64

    }
    return (
      <ScrollView>
        <Text style={{fontsize: 80}}>Try to scroll down</Text>
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Text style={{fontsize: 80}}>Try to scroll down</Text>
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Text style={{fontsize: 80}}>Try to scroll down</Text>
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Text style={{fontsize: 80}}>Try to scroll down</Text>
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        <Image source ={require('./assets/dog.jpg')} style={{width:100, height: 100}} />
        </ScrollView> 
      
        
      
    );
  }
