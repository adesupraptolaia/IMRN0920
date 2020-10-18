import React, { useEffect } from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';


const logo = require("../assets/logo.jpg")

const Splash = ({ navigation }) => {

    useEffect(()=>{
        console.warn("masuk")
        setTimeout(()=>{
            navigation.navigate("Register")
        }, 3000)
    }, [])

    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        }}>
            <TouchableOpacity style={{
                width: 300,
                height: 300,
                backgroundColor: "#EAEAF0",
                borderRadius: 300,
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.95,
            }}
            onPress={()=>navigation.navigate("Login")}
            >
                <Image source={logo} style={{
                    width: 233,
                    height: 133
                }} />
            </TouchableOpacity>
        </View>
    );
}

export default Splash;
