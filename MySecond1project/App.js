import React from 'react';
import {  Text, TextInput, View } from 'react-native';

export default function App() {

 
  return (
    <View>
      <Text>
        Hello, I am a student in CIS340!
        </Text>
        </View>
  );
}

export default function MultiComp () {
  return(
    <View style={{
      flex: 1,
      justifyContent: 'Center',
      alignItems: 'center'
    }} >
      <Text>Welcome to my class</Text>
   <App />
   <App />
   <App />
   <App />
    </View>
  )

}
