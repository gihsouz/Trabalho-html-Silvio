import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Adocao from './RotasButtomAdocao';
import Home from './RotasButtomHome';
import Cuidados from './RotasButtomCuidados';
import Sobre from './RotasButtomSobre';


const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Adocao"
        component={Adocao}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="library"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Cuidados"
        component={Cuidados}
        options={{
          tabBarLabel: 'Cuidados',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="heart"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarLabel: 'Sobre',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
