import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Veigh() {
  return (
    <ScrollView>

      <View style={estilo.container}>

        <Text style={estilo.titulo}>Veigh.js</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/fotoveigh1.jpeg')}
            />
            <Text style={estilo.rotulo}>Brilhando</Text>
          </View>


          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/fotoveigh2.jpeg')}
            />
          </View>


          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/fotoveigh2.jpeg')}
            />
            <Text style={estilo.rotulo}>Guitarra toca muito</Text>
          </View>


          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/fotoveigh3.jpeg')}
            />
            <Text style={estilo.rotulo}>Guitarra toca muito</Text>
          </View>

        </ScrollView>


        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            Veigh conhecido por cantar em forma de trap o que sente, seu dom encanta jovens todos os dias!
          </Text>
        </View>

      </View>

    </ScrollView>
  );
}


const estilo = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#a4d2f7',
  },

  img: {
    width: 330,
    height: 400,
    marginHorizontal: 25,
    borderRadius: 10,
  },

  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 30,
  },

  rotulo: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },

  resumo: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#ffffff70',
    borderRadius: 7,
    padding: 8,
  },

  textoResumo: {
    fontSize: 19,
  },

});