import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, Dimensions,FormValidationMessage,TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Toast from 'react-native-simple-toast';
import axios from 'axios';



import { Button, Block, Text, Input} from '../components';

const { height } = Dimensions.get('window');



class ConfirmMail extends Component {
  

   
 render() {
    return (
      <View style={styles.map}>
        <Text> Map </Text>
      </View>
    )
  
  }
}

export default ConfirmMail;