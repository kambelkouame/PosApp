import React, { Component } from 'react';
import { Image, StyleSheet, View ,Dimensions, TouchableWithoutFeedback,KeyboardAvoidingView,TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

import { Button, Block, Text, Card, Input , Label} from '../components';
import * as theme from '../constants/theme';
import Signature, {readSignature, clearSignature} from 'react-native-signature-canvas';
import Toast from 'react-native-simple-toast';
import axios from 'axios';


const styles = StyleSheet.create({
  DistRegister: {
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

class DistRegister extends Component {

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
    else if(field =='fullName'){
      this.setState({
        fullName:text,
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
      url:  'http://192.168.8.102:3000/dis',
      data: collection
    })
    
    .then(function (response) {

      if(response.data=='ok'){ 
      Toast.show('Vous avez bien enregistré le Distributeur!!');
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
     

 <SafeAreaView style={styles.DistRegister}>
            <ScrollView contentContainerStyle={{ paddingVertical: 25 }}>


             <KeyboardAvoidingView
              enabled
              behavior="padding"
              style={{ flex: 1 }}
              keyboardVerticalOffset={height * 0.2}
            >




           <Card
            style={[styles.margin, { marginTop: 18, borderRadius: 20 }]}
          backgroundColor="#6281C0" >
         
            <Block row space="between" style={{ marginTop: 25 }}>
              <Block>
            
              <Text center h3 regular  color="white">ENREGISTREMENT DES FORMULIARES</Text>
              </Block>
            </Block>
          </Card>


       
        <Block center middle>
            <Block   style={{ marginTop: 14 }}>
            <Block>
             <Input
              full
              label="Ville"
               placeholder="Ville"
               onChangeText={(text)=>this.register(text,'city')}
              style={{ marginBottom: 10,height: 40  }}
            />

             <Input
              full
              label="Pays"
              onChangeText={(text)=>this.register(text,'country')}
               placeholder="Pays"
              style={{ marginBottom: 10,height: 40 }}
            />
          

             


             <Input
                full
                text
                label="Adresse"
                 placeholder="Adresse"
                 onChangeText={(text)=>this.register(text,'address')}
                style={{ marginBottom: 10 ,height: 40}}
              />

              <Input
                full
                text
                label="Nom Commercial du Distributeur"
                onChangeText={(text)=>this.register(text,'fullName')}
                placeholder="Nom Commercial du Distributeur"
                style={{ marginBottom: 10 ,height: 40}}
              />

            
            

            <Input
              full
              text
              label="Nom du Gerant"
               placeholder="Nom du Gerant"
               onChangeText={(text)=>this.register(text,'GerantName')}
              style={{ marginBottom: 10,height: 40}}
            />
              
            <Input
              full
              number
              label="Numéro Télephone"
              onChangeText={(text)=>this.register(text,'AgencePhone')}
               placeholder="Ex: + 225 -- -- -- -- -- -- "
              style={{ marginBottom: 10,height: 40 }}
            />

        <View
              style={{
                flexDirection: "row",
                marginBottom:5
              }}
            >
             <Button
                
                style={{ marginBottom: 12,marginHorizontal:10 }}
                flexDirection="row"
               // onPress={() => navigation.navigate('Camera')}
              >
                <Text button>    scanner    </Text>
              </Button>
              <Button
               
                style={{ marginBottom: 12,marginHorizontal:10 }}
                flexDirection="row"

                onPress={() => navigation.navigate('Signature')}
              >
                <Text button>    signature    </Text>
              </Button>

              <Button
               
               style={{ marginBottom: 12,marginHorizontal:10 }}
               flexDirection="row"
               onPress={() => navigation.navigate('PosRegister')}
             >
               <Text button>    POS     </Text>
             </Button>

              
        </View>

              <Button
                full
                style={{ marginBottom: 12 }}
                color="#6281C0" 
                onPress={()=>this.submit(navigation)}
              >
                <Text button>Validate</Text>
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

export default DistRegister;