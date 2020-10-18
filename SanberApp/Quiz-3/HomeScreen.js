import React from "react";
import { Image, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from "./Componen/Icon";
import data from "./data.json";

const dataIcon = data.icon;
const dataFlashSale = data.flashsale;

const HomeScreen = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    padding: 16,
                }}
            >
                <View
                    style={{
                        width: 300,
                        height: 44,
                        borderColor: "#727C8E",
                        borderWidth: 1,
                        borderRadius: 11,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                    }}
                >
                    <AntDesign
                        name="search1"
                        size={16}
                        color="#727C8E"
                        style={{}}
                    />
                    <Text
                        style={{
                            fontSize: 15,
                            color: "#848991",
                        }}
                    >
                        Search Product
                    </Text>

                    <Feather
                        name="camera"
                        size={20}
                        color="#727C8E"
                        style={{
                            borderLeftWidth: 1,
                            paddingLeft: 10,
                            borderLeftColor: "#E6EAEE",
                        }}
                    />
                </View>
                <AntDesign name="bells" size={20} color="black" />
            </View>

            <View>
                <Image
                    source={require("../assets/1.png")}
                    style={{
                        width: 320,
                        height: 190,
                        alignSelf: "center",
                    }}
                />
            </View>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: 20,
                }}
            >
                {dataIcon.map((item) => {
                    return <Icon color={item.color} name={item.name} />;
                })}
            </View>

            <Text
                style={{
                    marginTop: 20,
                    fontSize: 29,
                    fontWeight: "800",
                    paddingLeft: 16,
                }}
            >
                Flash Sale
            </Text>

            <View
                style={{
                    flexDirection: "row",
                    paddingLeft: 16,
                }}
            >
                {dataFlashSale.map((item) => {
                    return (
                        <View
                            style={{
                                width: 120,
                                height: 170,
                            }}
                        >
                            <Image source={{ uri: item.foto }} alt="foto" style={{
                                width: 100,
                                height: 110,
                            }} />

                            <Text>{item.name}</Text>
                            <Text>{item.price}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

export default HomeScreen;
