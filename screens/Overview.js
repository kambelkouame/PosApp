import React, { Component } from 'react';
import { TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { Block, Card, Text, Icon, Label } from '../components';
import * as theme from '../constants/theme';




const styles = StyleSheet.create({
  overview: {
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

class Overview extends Component {
  static navigationOptions = {
    headerLeftContainerStyle: {
      paddingLeft: 24
    },
    headerRightContainerStyle: {
      paddingRight: 24
    },
    headerLeft: (
      <TouchableOpacity><Icon menu /></TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity><Icon options /></TouchableOpacity>
    ),
    headerTitle: (
      <Block row middle><Text h4>Dashboard</Text></Block>
    )
  }

  render() {
    
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.overview}>
        <ScrollView contentContainerStyle={{ paddingVertical: 25 }}>
          

           <Card
            title="VOS STATISTIQUES"
            style={[styles.margin, { marginTop: 18,borderRadius: 20 }]}
          >
         
            <Block row space="between" style={{ marginTop: 25 }}>
              <Block>
                <Text h2 light>300</Text>
                <Block row center>
                  <Label blue />
                  <Text paragraph color="gray">Nombre de Point.de.Vente</Text>
                </Block>
              </Block>
              <Block>
                <Text h2 light>100</Text>
                <Block row center>
                  <Label purple />
                  <Text paragraph color="gray">Nombre de Distributeur</Text>
                </Block>
              </Block>
            </Block>
          </Card>


          <Block row style={[styles.margin, { marginTop: 18 }]}>
          
            <Card middle style={{ marginRight: 7 ,borderRadius: 20}} backgroundColor="#097C3E">
              <Icon vehicle />
              <Text h3 bold  onPress={() => navigation.navigate('DistRegister')}  color="white" style={{ marginTop: 17 }}>+ NEW</Text>
              <Text paragraph color="white"> Distributeur</Text>
            </Card>
            
            
            <Card middle style={{ marginLeft: 7,borderRadius: 20 }} backgroundColor="#097C3E">
               <Icon vehicle />
                <Text h3 bold onPress={() => navigation.navigate('PosRegister')}  color="white" style={{ marginTop: 17 }}>+ NEW</Text>
              <Text paragraph color="white">  Point de Vente</Text>
            </Card>
          </Block>

          <Card
            title="Les Derniers Enregistrements"
            style={[styles.margin, { marginTop: 18,borderRadius: 20 }]}
          >
            <Block style={styles.driver}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block>
                    <Image
                      style={styles.avatar}
                      source={require('../assets/images/Pos_Avatar.png')}
                    />
                  </Block>
                  <Block flex={2}>
                    <Text h4>Ali Sender</Text>
                    <Text paragraph color="gray">Treichville,ARRAS 3</Text>
                  </Block>
                  <Block>
                    
                    <Text paragraph right color="gray">a l'intant</Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
            <Block style={styles.driver}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block>
                    <Image
                      style={styles.avatar}
                      source={require('../assets/images/Dist_Avatar.png')}
                    />
                  </Block>
                  <Block flex={2}>
                    <Text h4>IITrans</Text>
                    <Text paragraph color="gray">Cocody Angré</Text>
                  </Block>
                  <Block>
                    <Text paragraph right color="black"></Text>
                    <Text paragraph right color="gray">il y'a 15 min</Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
            <Block style={styles.driver}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block>
                    <Image
                      style={styles.avatar}
                      source={require('../assets/images/Dist_Avatar.png')}
                    />
                  </Block>
                  <Block flex={2}>
                    <Text h4>IntelDis</Text>
                    <Text paragraph color="gray">II Plateau sococe</Text>
                  </Block>
                  <Block>
                    <Text paragraph right color="black"></Text>
                    <Text paragraph right color="gray">1 hour</Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
          </Card>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Overview;