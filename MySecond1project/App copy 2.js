import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  function getFullName(fName, mName, lName) {
  return fName + "" + mName + "" + lName; }
 const pet = "Dog";
  return (
      <Text>
        {"\n\n\n\n\n"}
        Hello, I am a student in CIS340! {"\n"}
       My Full Name is {getFullName("Haden", "Robert", "Waski")} {"\n"}
        I have a {pet}!
        </Text>

  );
}

