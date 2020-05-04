import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const csuLogo = {
    uri: "https://raw.githubusercontent.com/1abdunabiRamadan/CIS340/master/images/rams.png",

  };
  return (
    <View style={styles.container}>
     <ImageBackground source={csuLogo} style={styles.image}>

       <Text style={styles.text}> CSU Logo</Text>

     </ImageBackground>

     </View>
     );
     }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

 image: {
  flex: 1,
  flexDirection: "column",
  },

  text: {
   color: "red",
   fontSize: 40,
   fontWeight: 'bold',
  },

  stretchLogo: {
    width: 50,
    height: 200,
    resizeMode: 'contain',
  }
});
