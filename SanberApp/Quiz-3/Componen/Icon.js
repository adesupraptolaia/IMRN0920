import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Text, View } from 'react-native';

const Icon = ({color, name}) => {
    return (
        <View style={{
            width: 50,
            height: 50,
            alignItems: "center",
        }}>
            <View style={{
                width: 50,
                height: 50,
                backgroundColor: color,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
            }}>
                <FontAwesome5 name="tshirt" size={24} color="white" />
            </View>
        <Text>{name}</Text>
        </View>
        
    );
}

export default Icon;
