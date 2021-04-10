import React from 'react';
import {Text, TextInput, View} from 'react-native';

function MyApp() {
  
  function getFullName(fName, mName, lName) {
    return fName + " " + mName + " " + lName;
  }
  
  const pet = "Dog";
  return (

    <View>
    <Text>
      {"\n\n\n\n\n\n"}
      
      Hello, I'm a student in CIS340! {"\n"}
      My full name is {getFullName("Bryan", "Michael", "Muir")} {"\n"}
      I will have a {pet}!
    </Text>
    <TextInput 
    style = {{
      height: 40,
      borderColor: "blue",
      borderWidth: 1

    }}
    defaulValue = "Enter Your Input"/> 
    </View>
     
    
  );
}

export default function MultiComp(){
  return(

    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    
    }}>
      <Text>  {"\n\n\n\n\n"} Welcome to My Class</Text>
      
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />

      

    </View>

  )

}

