import React from 'react';
import {  Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View >
      <Text>Hey, my name is {props.name}. I am a student in CIS340!</Text>
    </View>
  );
}

export default function MultiCmp() {
  return (
    <View style = {{
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text> Welcome to CIS 340!</Text>
      <Student name = "Haden Waski"/>
      <Student name = "John Smith" />
      <Student name = "Bob Jones"/>
      <Student name= "Cindy Thompson" />
    </View>
  );
}

export default function MultiTVs() {
  return (
    <View>
      <Text> Welcome to CIS 340!</Text>
      <TV name = "LG"/>
      <TV name = "Sony" />
    </View>
  );