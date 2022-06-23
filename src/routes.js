import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/home/home';
import Carrinho from './pages/carrinho/carrinho';
import Relatorio from './pages/relatorio/relatorio';

import { Entypo, Feather} from '@expo/vector-icons'
const Tab = createBottomTabNavigator();

export default function Routes(){
  return(
    <Tab.Navigator 
    screenOptions={{
      headerShown: false,
      tabBarStyle:{
        backgroundColor: '#000'
      }
    }}>
      <Tab.Screen
        name='Carrinho' 
        component={Carrinho}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="shopping-cart" size={size} color={color} />
          )
        }}
       />

      <Tab.Screen 
        name='Inicio' 
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
             <Entypo name='home' size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name='Relatorio'
        component={Relatorio}
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo name="news" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}