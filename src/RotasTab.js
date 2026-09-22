import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './pages/Home';
import Artista from './RotasButtomArtista';
import Musica from './RotasButtomMusica';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Musica" component={Musica} />
        <Tab.Screen name="Artista" component={Artista} />
    </Tab.Navigator>
  );
}
