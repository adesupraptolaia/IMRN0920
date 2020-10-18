import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from "../Quiz-3/Login";
import HomeScreen from "../Quiz-3/HomeScreen";
import Register from "../Quiz-3/Register";
import Splash from "../Quiz-3/Splash";

const StackNavigator = createStackNavigator();


const StackNavigatorScreen = () => (
        <StackNavigator.Navigator initialRouteName="Splash">
            <StackNavigator.Screen name='Login' component={Login} />
            <StackNavigator.Screen name='Register' component={Register} />
            <StackNavigator.Screen name='Home' component={HomeScreen} />
            <StackNavigator.Screen name='Splash' component={Splash} />
        </StackNavigator.Navigator>
);

export default () => (
    <NavigationContainer>
        <StackNavigatorScreen />
    </NavigationContainer>
);
