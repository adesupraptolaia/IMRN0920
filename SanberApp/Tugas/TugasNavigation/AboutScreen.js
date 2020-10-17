import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import {
    MaterialCommunityIcons,
    AntDesign,
    Entypo,
} from "@expo/vector-icons";

const About = () => {
    return (
        <ScrollView>
            <Text
                style={{
                    fontSize: 36,
                    marginTop: 10,
                    marginBottom: 12,
                    fontWeight: "bold",
                    alignSelf: "center",
                }}
            >
                Tentang Saya
            </Text>
            <View style={styles.acountBox}>
                <MaterialCommunityIcons
                    name="account"
                    size={200}
                    color="#CACACA"
                />
            </View>
            <Text
                style={{
                    fontSize: 24,
                    marginTop: 24,
                    fontWeight: "bold",
                    alignSelf: "center",
                }}
            >
                Ade Suprapto Laia Putra
            </Text>

            <Text
                style={{
                    fontSize: 16,
                    color: "#3EC6FF",
                    alignSelf: "center",
                    fontWeight: "bold",
                }}
            >
                React Native Developer
            </Text>

            <View style={styles.boxPortofolio}>
                <Text style={styles.titleBoxPortofolio}>Portofolio</Text>
                <View style={styles.githubBox}>
                    <View style={styles.gihub}>
                        <AntDesign name="gitlab" size={42} color="#3EC6FF" />
                        <Text>@adesupraptolaia</Text>
                    </View>
                    <View style={styles.gihub}>
                        <AntDesign name="github" size={42} color="black" />
                        <Text>@adesupraptolaia</Text>
                    </View>
                </View>
            </View>

            <View style={styles.boxContactMe}>
                <Text style={styles.titleBoxContactMe}>Hubungi Saya</Text>
                <View style={styles.sosmed}>
                    <View style={styles.sosmedIcon}>
                        <Entypo name="facebook" size={42} color="#3EC6FF" />
                        <Text style={{ paddingLeft: 15 }}>
                            @adesupraptolaia
                        </Text>
                    </View>
                    <View style={styles.sosmedIcon}>
                        <AntDesign name="instagram" size={42} color="#3EC6FF" />
                        <Text style={{ paddingLeft: 15 }}>
                            @adesupraptolaia
                        </Text>
                    </View>
                    <View style={styles.sosmedIcon}>
                        <AntDesign name="twitter" size={42} color="#3EC6FF" />
                        <Text style={{ paddingLeft: 15 }}>
                            @adesupraptolaia
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const dimensions = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: dimensions.height,
        borderColor: "black",
        borderWidth: 2,
    },
    acountBox: {
        width: 200,
        height: 200,
        backgroundColor: "#EFEFEF",
        borderRadius: 100,
        alignItems: "center",
        alignSelf: "center",
    },
    accountImage: {
        height: 126,
    },
    boxPortofolio: {
        height: 140,
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: "#EFEFEF",
        marginTop: 16,
        borderRadius: 16,
        padding: 8,
    },
    titleBoxPortofolio: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        fontSize: 18,
        paddingBottom: 8,
    },
    githubBox: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
    },
    gihub: {
        alignItems: "center",
    },
    boxContactMe: {
        flex: 1,
        height: 140,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 5,
        backgroundColor: "#EFEFEF",
        marginTop: 16,
        borderRadius: 16,
        padding: 8,
    },
    titleBoxContactMe: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        fontSize: 18,
        paddingBottom: 8,
    },
    sosmed: {
        alignItems: "center",
        justifyContent: "center",
    },
    sosmedIcon: {
        marginTop: 15,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
});

export default About;
