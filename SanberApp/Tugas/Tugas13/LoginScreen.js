import React from "react";
import {
    Image,
    StatusBar,
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
} from "react-native";

class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require("./images/logo.png")}
                />
                <Text style={styles.text}>Login</Text>

                <View style={styles.userIputBox}>
                    <Text>Username/Email</Text>
                    <TextInput style={styles.userIput}></TextInput>
                </View>

                <View style={styles.userIputBox}>
                    <Text>Password</Text>
                    <TextInput style={styles.userIput}></TextInput>
                </View>

                <View style={styles.loginButton}>
                    <Text style={styles.buttonText}>Masuk</Text>
                </View>

                <Text
                    style={{
                        fontSize: 24,
                        textAlign: "center",
                        color: "#3EC6FF",
                    }}
                >
                    atau
                </Text>

                <View style={styles.registerButton}>
                    <Text style={styles.buttonText}>Daftar</Text>
                </View>
            </View>
        );
    }
}

const dimensions = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: dimensions.height,
        borderColor: "black",
        borderWidth: 2,
    },
    text: {
        fontSize: 24,
        marginTop: 30,
        marginBottom: 30,
        alignSelf: "center",
    },
    userIputBox: {
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 20,
    },
    userIput: {
        borderColor: "#003366",
        borderWidth: 1,
        height: 48,
    },
    registerButton: {
        backgroundColor: "#003366",
        width: 140,
        height: 40,
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 16,
        marginTop: 16,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 24,
        textAlign: "center",
    },
    loginButton: {
        backgroundColor: "#3EC6FF",
        width: 140,
        height: 40,
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 16,
        marginBottom: 16,
        marginTop: 20,
    },
});

export default Login;
