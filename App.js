import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes'
import Home from './src/pages/navbar/navbar';


export default function App() {
  return (
    <NavigationContainer>
      <Home />
      <Routes />
    </NavigationContainer>
  );
}