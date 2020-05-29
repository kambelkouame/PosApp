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
      typePos: 'POS',
     nomCommercial :'',
      fullName:'',
      agentTerrain:'',
      telephone:'',
      email:'',
       pays :'',
     ville :'',
      adresse :'',
      rccm :'' ,
      id_dis:'' 
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
     collection.typePos=this.state.typePos,
      collection.id_dis=this.state.id_dis
   
     axios({
      method: 'post',
      url:  'http://192.168.8.104:3000/dis',
      data: collection
    })
    .then(function (response) {
          console.log(response)
          if(response.data.message=="succes"){

          Toast.show('Vous avez bien enregistré le POS!!');
          navigation.navigate('PosRegister'); 
              
        
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
       typePos: 'Pos',
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
    const id = navigation.getParam('id', 'unknown'); 
    const agentTerrain = navigation.getParam('agentTerrain', 'unknown'); 
    this.state.id_dis=id;
    this.state.agentTerrain=agentTerrain;

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
            
              <Text center h3 regular  color="white">ENREGISTRER LES POINTS DE VENTE DU DISTRIBUTEUR</Text>
              </Block>
            </Block>
          </Card>


       
        <Block center middle>

          <Block center  style={{paddingTop:45 , width: 202 }}>
          
            <Block   style={{ marginTop: 14 }}>
            <Block>

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
            </Block>
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

export default PosRegister;