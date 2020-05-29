import React, { Component } from 'react';
import { Image,Picker, StyleSheet, View ,Dimensions, TouchableWithoutFeedback,KeyboardAvoidingView,TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

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
   
  },
   container: {  
         flex: 1,  
         alignItems: 'center',  
         justifyContent: 'center',  
     },  
    textStyle:{  
        margin: 24,  
        fontSize: 25,  
        fontWeight: 'bold',  
        textAlign: 'center',  
    },  
    pickerStyle:{  
        height: 150,  
        width: "80%",  
        color: '#344953',  
        justifyContent: 'center',  
    }  

});

const { height } = Dimensions.get('window');

class DistRegister extends Component {

  

  constructor(){

    super();

    this.state={
      typePos: 'init',
     nomCommercial :'',
      fullName:'',
      agentTerrain:'',
      telephone:'',
      email:'',
       pays :'',
     ville :'',
      adresse :'',
      rccm :''   
    }
  }

  register(text, field){
    if(field=='ville'){
      this.setState({
        ville:text,
      })
    }else if(field =='pays'){
      this.setState({
        pays:text,
      })
    }else if(field =='adresse'){
      this.setState({
        adresse:text,
      })
    }else if(field =='nomCommercial'){
      this.setState({
        nomCommercial:text,
      })
    }else if(field =='telephone'){
      this.setState({
        telephone:text,
      })
    }
    else if(field =='fullName'){
      this.setState({
        fullName:text,
      })
    } else if(field =='typePos'){
      this.setState({
        typePos:text,
      })
    }else if(field =='rccm'){
      this.setState({
        rccm:text,
      })
    }else if(field =='email'){
      this.setState({
        email:text,
      })
    }
  }

  submit(navigation){
    let collection={}
    collection.fullName=this.state.fullName,
    collection.email=this.state.email,
    collection.pays=this.state.pays,
    collection.ville=this.state.ville
    collection.adresse=this.state.adresse,
    collection.nomCommercial=this.state.nomCommercial,
    collection.rccm=this.state.rccm,
     collection.agentTerrain=this.state.agentTerrain,
     collection.typePos=this.state.typePos
   
     axios({
      method: 'post',
      url:  'http://192.168.8.104:3000/dis',
      data: collection
    })
    .then(function (response) {
          console.log(response)
          if(response.data.message=="succes"){

          Toast.show('Vous avez bien enregistré le Distributeur!!');
                if(collection.typePos=="Dis"){
                 
                  navigation.navigate('PosRegister',{id:response.data.id,agentTerrain:collection.agentTerrain}); 

                 }else{
                   navigation.navigate('Overview');
                  }
        
           }else if(response.data.message=="Existe déjà"){
            console.log(response.data.message); 
         
            Toast.show('lutilisateur existe deja');
            }else{
                Toast.show('Verifier tous les champs ');
            }
       
    })  
    .catch(function (error) {
      console.log(error);
    });
    this.setState({
       typePos: 'init',
       nomCommercial :'',
        fullName:'',
        telephone:'',
        email:'',
        pays :'',
        ville :'',
        adresse :'',
        rccm :''   
    })
    
  }

  render() {

   const { navigation } = this.props;

    const phone = navigation.getParam('userphone', 'contact'); 
    this.state.agentTerrain=phone
   
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
            
              <Text center h3 regular  color="white">ENREGISTREMENT DES FORMULIARES {this.state.agentTerain}</Text>
              </Block>
            </Block>
          </Card>


       
        <Block center middle>
            <Block   style={{ marginTop: 14 }}>
            <Block>


             <View style={styles.container}>  
                <Picker style={styles.pickerStyle}  
                value={this.state.typePos}
                        selectedValue={this.state.language}  
                        onValueChange={(itemValue, itemIndex) =>  
                            this.setState({language: itemValue, typePos: itemValue})}  
                    >  
                    <Picker.Item label="Selectionner" value="init" />  
                    <Picker.Item label="POS independant" value="PosInd" />  
                    <Picker.Item label="Distributeur" value="Dis" />  
                </Picker>  
              
            </View> 


             <Input
              full
              label="Nom commercial "
              value={this.state.nomCommercial}
               placeholder="Nom Commercial"
               onChangeText={(text)=>this.register(text,'nomCommercial')}
              style={{ marginBottom: 10,height: 40  }}
            />
            

            <Input
              full
              text
              label="Nom du Gerant"
              value={this.state.fullName}
               placeholder="Nom et prenom du Gerant"
               onChangeText={(text)=>this.register(text,'fullName')}
              style={{ marginBottom: 10,height: 40}}
            />
             
           <Input
              full
              number
               value={this.state.telephone}
              label="Numéro Télephone"
              onChangeText={(text)=>this.register(text,'telephone')}
               placeholder="Ex: + 225 -- -- -- -- -- -- "
              style={{ marginBottom: 10,height: 40 }}
            />
              <Input
              full
              text
              label="Email"
              value={this.state.email}
              onChangeText={(text)=>this.register(text,'email')}
               placeholder="Ex: email@email.email "
              style={{ marginBottom: 10,height: 40 }}
            />

              <Input
              full
              label="Pays"
              value={this.state.pays}
              onChangeText={(text)=>this.register(text,'pays')}
               placeholder="Pays"
              style={{ marginBottom: 10,height: 40 }}
            />
          

             


             <Input
                full
                text
                label="Ville"
                 value={this.state.ville}
                 placeholder="EX: Commune,Quartier-Rue n'"
                 onChangeText={(text)=>this.register(text,'ville')}
                style={{ marginBottom: 10 ,height: 40}}
              />

              <Input
                full
                text
                label="Adresse"
                 placeholder="Ville"
                 value={this.state.adresse}
                 onChangeText={(text)=>this.register(text,'adresse')}
                style={{ marginBottom: 10 ,height: 40}}
              />

              <Input
                full
                text
                label="Registre de commerce"
                 placeholder="registre de commerce"
                value={this.state.rccm}
                 onChangeText={(text)=>this.register(text,'rccm')}
                style={{ marginBottom: 10 ,height: 40}}
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
                <Text button
                 onPress={() => navigation.navigate('Cameras')}>scanner</Text>
                </Button>
              <Button
                style={{ marginBottom: 12,marginHorizontal:10 }}
                flexDirection="row"
                onPress={() => navigation.navigate('Signature')}
              >
                <Text button>    signature    </Text>
              </Button>

            

              
        </View>

              <Button
                full
                style={{ marginBottom: 12 }}
                color="#6281C0" 
                onPress={()=>this.submit(navigation)}
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

 

export default DistRegister;