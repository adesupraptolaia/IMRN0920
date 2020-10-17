import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import AboutScreen from './AboutScreen';
import SkillScreen from './SkillScreen';
import AddScreen from './AddScreen';
import ProjectScreen from './ProjectScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const RootStack = createStackNavigator();
const TabsStack = createBottomTabNavigator();
const DrawerStack = createDrawerNavigator();


const iconTab = ({ route }) => {
    return ({
        tabBarIcon: ({ focused, color, size }) => {
            if (route.name == 'SkillScreen') {
                return <FontAwesome5 name={'user-circle'} size={size} color={color} solid />
            } else if (route.name == 'ProjectScreen') {
                return <FontAwesome5 name="centos" size={size} color={color} solid />
            } else if (route.name == 'AddScreen') {
                return <FontAwesome5 name="calendar-plus" size={size} color={color} solid />
            }
        },
    });
}



const TabsStackScreen = () => (
    <TabsStack.Navigator screenOptions={iconTab} >
        <TabsStack.Screen name='SkillScreen' component={SkillScreen}
            options={{
                title: 'Skill'
            }} />
        <TabsStack.Screen name='ProjectScreen' component={ProjectScreen}
            options={{
                title: 'Proyek'
            }} />
        <TabsStack.Screen name='AddScreen' component={AddScreen}
            options={{
                title: 'Plus'
            }}
        />
    </TabsStack.Navigator>
);

const DrawerStackScreen = () => (
    <DrawerStack.Navigator >
        <DrawerStack.Screen name='TabsStackScreen' component={TabsStackScreen}
            options={{
                title: 'Portofolio'
            }} />
        <DrawerStack.Screen name='AboutScreen' component={AboutScreen}
            options={{
                title: 'About'
            }}
        />
    </DrawerStack.Navigator>
);

const RootStackScreen = () => (
    <RootStack.Navigator>
        <RootStack.Screen name='LoginScreen' component={LoginScreen}
            options={{
                title: 'Login'
            }}
        />
        <RootStack.Screen name='RegisterScreen' component={RegisterScreen}
            options={{
                title: 'Register'
            }}
        />
        <RootStack.Screen name='DrawerStackScreen' component={DrawerStackScreen}
            options={{
                title: 'Skill'
            }}
        />
    </RootStack.Navigator>
);

export default () => (
    <NavigationContainer>
        <RootStackScreen />
    </NavigationContainer>
);
