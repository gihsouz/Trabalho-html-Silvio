import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Artista(props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Os melhores Artistas</Text>

      <FlatList
        data={artistas}
        renderItem={({ item }) => (
          <View style={estilo.artista}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(item.buttom);
              }}>
              <Text style={estilo.txtArtista}> {item.nome}</Text>
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
const artistas = [
  {
    uid: 1,
    nome: 'Veigh',
    like: 234,
    seguidores: 2345,
    buttom: 'Veigh',
  },

  {
    uid: 2,
    nome: 'Luiza',
    like: 934,
    seguidores: 2345,
    buttom: 'Luiza',
  },

  {
    uid: 3,
    nome: 'Maria',
    like: 434,
    seguidores: 2345,
    buttom: 'MarinaCena',
  },

  {
    uid: 4,
    nome: 'Pedro',
    like: 334,
    seguidores: 2345,
    buttom: 'Pedro',
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
    alignContent: 'center',
    textAlign: 'center',
  },

  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 700,
    marginVertical: 30,
  },

  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  txtArtista: {
    fontSize: 20,
  },
});
