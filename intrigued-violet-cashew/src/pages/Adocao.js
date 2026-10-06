import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Cuidados (props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> ENTENDA COMO FUNCIONA A ADOÇÃO</Text>

      <FlatList
        data={gatoscuidados}
        renderItem={({ item }) => (
          <View style={estilo.cuidados}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(item.buttom);
              }}>
              <Text style={estilo.txtArtista}> {item.nome}</Text>
            </TouchableOpacity>
            <View style={estilo.rede}>
              <Text style={estilo.gatoscuidados}>
                <MaterialCommunityIcons
                  name="book"
                  size={20}
                  color={'#FF4500'}
                />
                {item.like} gatoscuidados
              </Text>
              <Text style={estilo.gatoscuidados}>
                <MaterialCommunityIcons
                  name="heart"
                  size={20}
                  color={'#FFFF00'}
                />
                {item.seguidores} SAIBA COM CUIDAR
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
const gatoscuidados= [
  {
    uid: 1,
    nome: 'GATOS ANGORÁ',
    like: 350,
    seguidores: 30,
    buttom: 'GATOS ANGORÁ',
  },

  {
    uid: 2,
    nome: 'VIRALATAS',
    like: 50,
    seguidores: 10,
    buttom: 'VIRALATAS',
  },

  {
    uid: 3,
    nome: 'PORQUINHOS DA INDIA',
    like: 120,
    seguidores: 20,
    buttom: 'PORQUINHOS DA INDIA',
  },

  {
    uid: 4,
    nome: 'HAMISTER',
    like: 100,
    seguidores: 15,
    buttom: 'HAMISTER',
  },
];

const estilo = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#a4d2f7',
  },


  cuidados: {
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


  txtArtista: {
    fontSize: 20,
  },


  gatoscuidados: {
    margin: 10,
  },

});