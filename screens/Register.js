import React, { Component } from 'react';
import {
  Image, StyleSheet, Dimensions,View, TouchableWithoutFeedback,KeyboardAvoidingView,TouchableOpacity, SafeAreaView, ScrollView
} from 'react-native';
const axios = require('axios');
import Toast from 'react-native-simple-toast';




import { Button, Block, Text, Input } from '../components';
import * as theme from '../constants/theme';

const { height } = Dimensions.get('window');


class Register extends Component {
 
  constructor(){
    super();
    this.state={
      fullName :'',
      last_name :'',
      email :'',
      phone:'',
      password:'' 
      
    }
  }

  register(text, field){
    if(field=='fullName'){
      this.setState({
        fullName:text,
      })
    }else if(field =='last_name'){
      this.setState({
        last_name:text,
      })
    }else if(field =='email'){
      this.setState({
        email:text,
      })
    }else if(field =='phone'){
      this.setState({
        phone:text,
      })
    }else if(field =='password'){
      this.setState({
        password:text,
      })
    }

  }

  submit(navigation){
    let collection={}
    collection.fullName=this.state.fullName,
    collection.last_name=this.state.last_name,
    collection.email=this.state.email,
    collection.phone=this.state.phone,
    collection.password=this.state.password
    console.warn(collection);

    let res={}
     axios({
      method: 'post',
      url:  'http://192.168.8.102:3000/register',
      data: collection
    })
    
    .then(function (response) {

      if(response.data=="ok"){ 
        console.log(response.data)
       Toast.show('Vous avez bien été enregistré!!,Veillez vous connecter pour debut');
       navigation.navigate("Login");

     }else{
      console.log(response.data)
      Toast.show('une Erreur est survenue Veillez réeassayer');
      }
      console.log(response.data)
    // console.log(response);
    //  console.log();
    })  
    .catch(function (error) {
      console.log(error);
    });
    
    
   
      this.props.navigation.navigate("Login");
     
  // 
  }

  render(){

const { navigation } = this.props;
   
    
     return (
      
    <SafeAreaView >
       <ScrollView contentContainerStyle={{ paddingVertical: 110 }}>

       <KeyboardAvoidingView
        enabled
        behavior="padding"
        style={{ flex: 1 }}
        keyboardVerticalOffset={height * 0.2}
      >

        <Block center middle>
          <Block middle>
            <Image
              source={require('../assets/images/Base/Logo.png')}
              style={{marginBottom: 25, height: 45 , width: 102 }}
            />
          </Block>
          <Block flex={2.5} center>
            <Text h3 style={{ marginBottom: 6 }}>
              Sign up 
            </Text>
            <Text paragraph color="black3">
             Veillez vous enregistrer pour debuter!
            </Text>
            <Block   style={{ marginTop: 14 }}>
           
            <View
      style={{
        flexDirection: "row",
        marginBottom:5
      }}
    >

             <Input
                full
                email
                label="Nom"
                 onChangeText={(text)=>this.register(text,'fullName')}
                placeholder="Name"
                style={{ marginBottom: 10 ,height: 40 , width: 170 }}
              />       
              <Input
              full
              label="Prenom"
              onChangeText={(text)=>this.register(text,'last_name')}
              placeholder="Prenom"
              style={{ marginBottom: 10,height: 40, width: 180  }}
            />  
        </View>
              
            <Input
              full
              email
              label="Adresse Email"           
              onChangeText={(text)=>this.register(text,'email')}
              placeholder="Ex: email@mail.com"
              style={{ marginBottom: 10}}
            />
            <Input
              full
              number
              label="Numero de Telephone"
               onChangeText={(text)=>this.register(text,'phone')}
              placeholder="+225 .. .. .. .."
              style={{ marginBottom: 10 }}
            />


              <Input
                full
                password
                label="password"
                placeholder="XX XX XX XX XX"
                onChangeText={(text)=>this.register(text,'password')}
                style={{ marginBottom: 10}}
              />

              <Button
                full
                style={{ marginBottom: 12 }}
              onPress={()=>this.submit(navigation)}
              >
                <Text button>Register</Text>
              </Button>
              <Text paragraph color="gray">
                Vous Avez déjà un compte? <Text
                  height={18}
                  color="blue"
                   onPress={() => navigation.navigate('Login')}>
                     Sign in
                </Text>
              </Text>
            </Block>
          </Block>
        </Block>
      </KeyboardAvoidingView>
       </ScrollView>
      </SafeAreaView>
    )


  }

}

export default Register;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 5,
    backgroundColor: theme.colors.white,
  },
  active: {
    borderColor: theme.colors.blue,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: theme.colors.lightblue,
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  icon: {
    flex: 0,
    height: 48,
    width: 48,
    borderRadius: 48,
    marginBottom: 15,
    backgroundColor: theme.colors.lightblue
  },
  check: {
    position: 'absolute',
    right: -9,
    top: -9,
  }
})