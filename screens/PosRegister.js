import React, { Component }  from 'react';
import { Image, StyleSheet,Dimensions, TouchableWithoutFeedback,KeyboardAvoidingView,TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

import { Button, Block, Text, Card, Input ,View, Label} from '../components';
import * as theme from '../constants/theme';
import Toast from 'react-native-simple-toast';
import axios from 'axios';



const styles = StyleSheet.create({
  PosRegister: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
  },
  margin: {
    marginHorizontal: 25,

  },
  driver: {
    marginBottom: 11,
  },
  avatar: {
    width: 48,
    height: 48,
   
  }
});

const { height } = Dimensions.get('window');

class PosRegister extends Component {

  constructor(){
    super();
    this.state={
       city :'',
     country :'',
     address :'',
     fullName:'',
     GerantName:'',
     AgencePhone:'' 
      
    }
  }

  register(text, field){
    if(field=='city'){
      this.setState({
        city:text,
      })
    }else if(field =='country'){
      this.setState({
        country:text,
      })
    }else if(field =='address'){
      this.setState({
        address:text,
      })
    }else if(field =='GerantName'){
      this.setState({
        GerantName:text,
      })
    }else if(field =='AgencePhone'){
      this.setState({
        AgencePhone:text,
      })
    }
    
  }

  submit(navigation){
    let collection={}
    collection.fullName=this.state.fullName,
    collection.address=this.state.address,
    collection.country=this.state.country,
    collection.GerantName=this.state.GerantName,
    collection.AgencePhone=this.state.AgencePhone,
    collection.city=this.state.city
   
    console.warn(collection);

     axios({
      method: 'post',
      url:  'http://192.168.8.102:3000/pos',
      data: collection
    })
    
    .then(function (response) {

      if(response.data=='ok'){ 
      Toast.show('Vous avez bien enrégistré le Point de Vente!!');
       console.log(response.data);
      navigation.navigate('Overview'); 
      
     }else{
      console.log(response.data);
      Toast.show('une Erreur est survenue Veillez réeassayer');
      }
 
    })  
    .catch(function (error) {
      console.log(error);
    });
    
  }


  render() {

 

   const { navigation } = this.props;
     return (
     

 <SafeAreaView style={styles.PosRegister}>
            <ScrollView contentContainerStyle={{ paddingVertical: 25 }}>


             <KeyboardAvoidingView
              enabled
              behavior="padding"
              style={{ flex: 1}}
              keyboardVerticalOffset={height * 0.2}
            >

         

           <Card
            style={[styles.margin, { marginTop: 18, borderRadius: 20 }]}
          backgroundColor="#04B20D" >
         
            <Block row space="between" style={{ marginTop: 25 }}>
              <Block>
            
              <Text center h3 regular  color="white">FORMULAIRE D'ENREGISTREMENT DES POINTS DE VENTE</Text>
              </Block>
            </Block>
          </Card>


       
        <Block center middle>

          <Block center  style={{paddingTop:45 , width: 202 }}>
          
            <Block   style={{ marginTop: 14 }}>
            <Block>

             <Input
                full
                label="Nom du Point de Vente"
                placeholder="Nom du Point de vente"
                onChangeText={(text)=>this.register(text,'fullName')}
                style={{ marginBottom: 10 ,height: 40 }}
              />
             <Input
              full
              label="Ville"
              placeholder="Ville"
              onChangeText={(text)=>this.register(text,'city')}
              style={{ marginBottom: 10,height: 40 }}
             
            />

             <Input
              full
              label="Pays"
              placeholder="Ex: Côte d'Ivoire"
              onChangeText={(text)=>this.register(text,'country')}
              style={{ marginBottom: 10 ,height: 40 }}
            />
            </Block>
              <Input
              full
              label="Adresse"
              placeholder="Adresse"
              onChangeText={(text)=>this.register(text,'address')}
              style={{ marginBottom: 10,height: 40}}
            />
           

            <Input
              full
              text
              label="NOM DU GERANT"
              placeholder="Nom du gérant"
              onChangeText={(text)=>this.register(text,'GerantName')}
              style={{ marginBottom: 10}}
            />
             
            <Input
              full
              number
              label="Numéro de Téléphone"
              onChangeText={(text)=>this.register(text,'AgencePhone')}
              placeholder="Ex: + 225 -- -- -- -- -- -- "
              style={{ marginBottom: 10 }}
            /> 

 
              <Button
                full
                style={{ marginBottom: 12 }}
                onPress={() => this.submit(navigation)}
              >
                <Text button>Valider</Text>
              </Button>
             
            </Block>
          </Block>
        </Block>
      </KeyboardAvoidingView>

       </ScrollView>
      </SafeAreaView>
    )
  }
}

export default PosRegister;