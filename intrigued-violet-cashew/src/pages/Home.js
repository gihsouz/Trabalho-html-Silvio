import * as React from 'react';
import {View,Text,StyleSheet, ImageBackground} from 'react-native';

export default function Home(){
  return(
    <View style={estilo.container}>
      <ImageBackground style={estilo.fundoimg} resizeMode="stretch" source={require('../../assets/fotocapapet.jpeg')}>
      <Text style={estilo.titulo}> PETCARE</Text>
            </ImageBackground>
          </View>
  );
}
const estilo = StyleSheet.create ({
  container:{
    flex:1,
  },
  fundoimg:{
    flex:1,
    justifyContent: 'center'
  },
   
  titulo:{
    fontSize:40,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 600,
  }
});
