import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import Veigh from './artista/Veigh';
import Luiza from './artista/Luiza';
import Pedro from './artista/Pedro';
import MarinaCena from './artista/MarinaCena';
import Artista from './pages/Artista';

const Stack = createStackNavigator();

export default function RotasButtomArtista() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Artista"
          component={Artista}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MarinaCena"
          component={MarinaCena}
          options={{ title: 'Marina' }}
        />

        <Stack.Screen
          name="Pedro"
          component={Pedro}
          options={{ title: 'Pedro' }}
        />

        <Stack.Screen
          name="Luiza"
          component={Luiza}
          options={{ title: 'Luiza' }}
        />

        <Stack.Screen
          name="Veigh"
          component={Veigh}
          options={{ title: 'Veigh' }}
        />
      </Stack.Navigator>
  );
}
