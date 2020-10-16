import React from "react";
import Register from "./RegisterScreen";
import Login from "./LoginScreen";
import About from "./AboutScreen";
import { ScrollView } from "react-native";

class Tugas13 extends React.Component {
    render() {
        return (
            <ScrollView>
                <Register />
                <Login />
                <About />
            </ScrollView>
        );
    }
}

export default Tugas13;
