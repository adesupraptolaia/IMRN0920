import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ButtonSignInUp = ({title, navigation}) => {
    return (
        <TouchableOpacity style={{
            width: 300,
            height: 50, 
            backgroundColor: "#F77866",
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
        }}
        onPress={()=>navigation.navigate("Home")}
        >
            <Text style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "white",
            }}>{title}</Text>
        </TouchableOpacity>
    );
}

export default ButtonSignInUp;
