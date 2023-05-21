/* eslint-disable */

import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react"
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./screen/homeScreen/Index";
import productDetails from "./screen/productDetails/Index";
import SplashScreen from "./screen/splashScreen/Index";

const Stack = createNativeStackNavigator();

function App(){
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={ SplashScreen }
            options={{ 
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Home" 
            component={ HomeScreen }
            options={{ 
              headerShown: false
            }}
          />
          <Stack.Screen name="Details" component={ productDetails } />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
