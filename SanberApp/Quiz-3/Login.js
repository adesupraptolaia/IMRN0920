import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import ButtonSignInUp from "./Componen/ButtonSignInUp";

const Login = ({navigation}) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
            }}
        >
            <View
                style={{
                    padding: 20,
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        color: "black",
                        alignItems: "flex-start",
                    }}
                >
                    Welcome Back
                </Text>
                <Text
                    style={{
                        fontSize: 12,
                    }}
                >
                    Sign up to continue
                </Text>
            </View>

            <View
                style={{
                    width: 366,
                    height: 498,
                    borderRadius: 18,
                    shadowColor: "#26727C8E",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 10,
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 50,
                }}
            >

                <Text>Email</Text>
                <TextInput
                    style={{
                        borderBottomColor: "#E6EAEE",
                        borderBottomWidth: 1,
                        height: 30,
                        marginBottom: 30
                    }}
                ></TextInput>

                <Text>Password</Text>
                <TextInput
                    style={{
                        borderBottomColor: "#E6EAEE",
                        borderBottomWidth: 1,
                        height: 38,
                        marginBottom: 20
                    }}
                    secureTextEntry={true}
                >
                </TextInput>

                <Text
                        style={{
                            fontSize: 12,
                            alignSelf: "flex-end",
                            marginBottom: 50
                        }}
                    >
                        Forgot Passowrd?
                    </Text>

                <ButtonSignInUp title="Sign In" navigation={navigation} />

                <Text
                        style={{
                            fontSize: 15,
                            alignSelf: "center",
                            marginTop: 30
                        }}
                    >
                        -OR-
                    </Text>

                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 11,
                    }}
                >
                    <View style={{
                        width: 149,
                        height: 44,
                        borderRadius: 6,
                        borderColor: "#E6EAEE",
                        borderWidth: 1,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 10,
                    }}>
                        <AntDesign name="facebook-square" size={24} color="#3B5998"/>
                        <Text> Facebook </Text>
                    </View>

                    <View style={{
                        width: 149,
                        height: 44,
                        borderRadius: 6,
                        borderColor: "#E6EAEE",
                        borderWidth: 1,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <AntDesign name="google" size={24} color="#F14336" />
                        <Text> Google </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Login;
