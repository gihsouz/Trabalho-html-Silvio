import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import talvezvoceprecisedemim from './musica/talvezvoceprecisedemim';

import penhasco from './musica/penhasco';

import escadadopredio from './musica/escadadopredio';

import numailha from './musica/numailha';

import Musica from './pages/Musica';


const Stack = createStackNavigator();


export default function RotasButtomMusica() {

  return (
      <Stack.Navigator>

        <Stack.Screen 
          name="Musica" 
          component={Musica} 
          options={{headerShown:false}} 
        />

        <Stack.Screen 
          name="numailha" 
          component={numailha} 
          options={{title:"Marina"}} 
        />

        <Stack.Screen 
          name="escadadopredio" 
          component={escadadopredio} 
          options={{title:"Pedro"}} 
        />

        <Stack.Screen 
          name="penhasco" 
          component={penhasco} 
          options={{title:"Luiza"}} 
        />

        <Stack.Screen 
          name="talvezvoceprecisedemim" 
          component={{talvezvoceprecisedemim}}
          options={{title:"Veigh"}} 
        />

      </Stack.Navigator>

  );

}