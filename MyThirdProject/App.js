import React, {useState} from 'react';
import {  Text, View, Button } from 'react-native';

function TV(props) {

  const [isOff,setisOff] = useState(true);
  return (
    <View>
      {"\n\n\n\n\n"}
      <Text>
        This is {props.name} TV, and it is {isOff ? "OFF" : "Turned Me On"}
      </Text>
      <Button
      onPress = {() => {
        setisOff(false);
      }}
      disabled={!IsOff}
      title ={IsOff ? "Turn Me On, Please!" : "Thank You"}
      />
      </View>
  );
}

