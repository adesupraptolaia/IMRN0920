import React from "react";
import { View, Text, TextInput } from "react-native";
import ButtonSignInUp from "./Componen/ButtonSignInUp";

const Register = ({navigation}) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
            }}
        >
            <View style={{
                padding: 20
            }}>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        color: "black",
                        alignItems: "flex-start"
                    }}
                >
                    Welcome
                </Text>
                <Text style={{
                    fontSize: 12
                }}>
                    Sign up to continue
                </Text>

            </View>

            <View style={{
                width: 366,
                height: 536,
                borderRadius: 18,
                shadowColor: "#26727C8E",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 10,
                padding: 30,
                paddingTop: 50,
            }}>
                <Text>Name</Text>
                <TextInput style={{
                    borderBottomColor: "#E6EAEE",
                    borderBottomWidth: 1,
                    height: 30,
                    marginBottom: 30,
                }}></TextInput>

                <Text>Email</Text>
                <TextInput style={{
                    borderBottomColor: "#E6EAEE",
                    borderBottomWidth: 1,
                    height: 30,
                    marginBottom: 30,
                }}></TextInput>

                <Text>Phone number</Text>
                <TextInput style={{
                    borderBottomColor: "#E6EAEE",
                    borderBottomWidth: 1,
                    height: 30,
                    marginBottom: 30,
                }}></TextInput>

                <Text>Password</Text>
                <TextInput style={{
                    borderBottomColor: "#E6EAEE",
                    borderBottomWidth: 1,
                    height: 30,
                    marginBottom: 50,
                }}
                secureTextEntry={true}
                ></TextInput>

                <ButtonSignInUp title="Sign Up" navigation={navigation} />
                
                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    marginTop: 11,
                }}>
                    <Text style={{
                        fontSize: 12,
                    }}>Already have an account? </Text>
                    <Text style={{
                        color: "#F77866",
                        fontSize: 12
                    }}>Sign In</Text>
                </View>
            </View>
        </View>
    );
};

export default Register;
