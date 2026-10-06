import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import CuidadosSemestrais from './Cuidados/ConsultasSemestrais';
import CuidadosnosBanhos from './Cuidados/CuidadosnosBanhos';
import Cuidados from './pages/Cuidados';


const Stack = createStackNavigator();


export default function RotasButtomCuidados() {

  return (
      <Stack.Navigator>

        <Stack.Screen 
          name="Cuidados" 
          component={Cuidados} 
          options={{headerShown:false}} 
        />

        <Stack.Screen 
          name="CuidadosSemestrais" 
          component={CuidadosSemestrais} 
          options={{title:"Cuidados Semestrais"}} 
        />

        <Stack.Screen 
          name="CuidadosnosBanhos" 
          component={CuidadosnosBanhos} 
          options={{title:"Cuidados nos Banhos"}} 
        />

      </Stack.Navigator>

  );

}