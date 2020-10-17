import React from "react";
import {
    Image,
    StatusBar,
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from "react-native";

class Register extends React.Component {
    render() {
        return (
            <ScrollView>
                    <Image
                        style={styles.logo}
                        source={require("../Tugas13/images/logo.png")}
                    />
                    <Text style={styles.text}>Register</Text>

                    <View style={styles.userIputBox}>
                        <Text>Username</Text>
                        <TextInput style={styles.userIput}></TextInput>
                    </View>

                    <View style={styles.userIputBox}>
                        <Text>Email</Text>
                        <TextInput style={styles.userIput}></TextInput>
                    </View>

                    <View style={styles.userIputBox}>
                        <Text>Password</Text>
                        <TextInput style={styles.userIput}></TextInput>
                    </View>

                    <View style={styles.userIputBox}>
                        <Text>Ulangi Password</Text>
                        <TextInput style={styles.userIput}></TextInput>
                    </View>

                    <TouchableOpacity style={styles.registerButton} onPress={ () => this.props.navigation.navigate('DrawerStackScreen') }>
                        <Text style={styles.buttonText}>Daftar</Text>
                    </TouchableOpacity>

                    <Text
                        style={{
                            fontSize: 24,
                            textAlign: "center",
                            color: "#3EC6FF",
                        }}
                    >
                        atau
                    </Text>

                    <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('LoginScreen')} >
                        <Text style={styles.buttonText}>Masuk</Text>
                    </TouchableOpacity>
            </ScrollView>
        );
    }
}

const dimensions = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
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
        marginBottom: 16,
        marginTop: 20,
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
        marginTop: 16,
    },
});

export default Register;
