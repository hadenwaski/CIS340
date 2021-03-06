import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'// import

export default function App() {

  let OpenImagePickerAsync = async () => {
    let permissionresult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionresult.granted == false) {
      alert("Permission is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
   if (pickerResult.cancelled == true) {
     return;
   }
   setSelectedImage({ localUri: pickerResult.uri});
  };

  //display selected image
  if (selectedImage !== null) {
    return (
      <View style = {styles.container}>
        <Image source = {{uri: selectedImae.localUri}} style = {styles.selImage}/>
      </View>
    )
  }

 return (
   <View style = {styles.container}>
     <Image source = {{uri: 'https://raw.hithubusercontent.com/1abdunabiRamadan/CIS340/master/images/logo.png'}}
     style={styles.logo} />

     <Text style ={styles.insts}>
       Press the button below to select an image on your phone!
     </Text>

     <TouchableOpacity style={styles.button} onPress={() => alert('You have not selected an image yet')} >
       <Text style = {styles.buttonText}>Pick Image</Text>
     </TouchableOpacity>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFE0',
   paddingHorizontal: 20,
    justifyContent: 'center',
  },

  button: {
    backgroundColor: "#778899",
    padding: 10,
    borderRadius: 5
  },

  insts: {
    fontSize: 18,
    color: "#87CEFA",
    marginHorizontal: 15,
    marginBottom: 10,
  },

 logo: {
    width: 310,
    height: 300,
    marginBottom: 20,
  },

  buttonText: {
    fontSize: 20,
    color: "#fff"
  }

});
