import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Artista(props) {

  return (

    <View style={estilo.container}>

      <Text style={estilo.titulo}>Os melhores Artistas</Text>


      <FlatList
        data={musicas}

        keyExtractor={(item) => item.uid.toString()}

        renderItem={({ item }) => (

          <View style={estilo.artista}>

            <TouchableOpacity 
              onPress={() => props.navigation.navigate(item.buttom)}
            >

              <Text style={estilo.txMusica}>
                {item.nome}
              </Text>

            </TouchableOpacity>


            <View style={estilo.rede}>

              <Text style={estilo.curtidas}>
                <MaterialCommunityIcons
                  name="thumb-up"
                  size={20}
                  color={'#F00'}
                />
                {item.like} Curtidas
              </Text>


              <Text style={estilo.seguidores}>
                <MaterialCommunityIcons
                  name="account-heart"
                  size={20}
                  color={'blue'}
                />
                {item.seguidores} Seguidores
              </Text>

            </View>

          </View>

        )}

      />

    </View>

  );

}


const musicas = [

  {
    uid: 1,
    nome: 'Perdoa por tudo vida',
    like: 234,
    seguidores: 2345,
    buttom: 'Veigh',
  },

  {
    uid: 2,
    nome: 'Penhasco',
    like: 934,
    seguidores: 2345,
    buttom: 'Luiza',
  },

  {
    uid: 3,
    nome: 'Lua Cheia',
    like: 434,
    seguidores: 2345,
    buttom: 'MarinaCena',
  },

  {
    uid: 4,
    nome: 'Escada do Prédio',
    like: 334,
    seguidores: 2345,
    buttom: 'PedroSampaio',
  },

];


const estilo = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#a4d2f7',
  },


  artista: {
    backgroundColor: '#a2f5e9',
    justifyContent: 'center',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
  },


  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
    marginVertical: 30,
  },


  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },


  txMusica: {
    fontSize: 20,
  },


  curtidas: {
    margin: 10,
  },


  seguidores: {
    margin: 10,
  },

});