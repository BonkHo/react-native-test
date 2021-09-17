import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.viewOne}>
                <Text style={styles.text}>Wow this is amazing!</Text>
            </View>
            <View style={styles.viewTwo}>
                <Text style={styles.text}>Wow this is amazing!</Text>
            </View>
            <View style={styles.viewThree}>
                <Image
                    style={styles.catPhoto}
                    source={require("./assets/cutecat.jpg")}
                />
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    viewOne: {
        flex: 1,
        width: "100%",
        backgroundColor: "darkblue",
        alignItems: "center",
        justifyContent: "center",
    },
    viewTwo: {
        flex: 2,
        width: "100%",
        backgroundColor: "powderblue",
        alignItems: "center",
        justifyContent: "center",
    },

    viewThree: {
        flex: 3,
        width: "100%",
        backgroundColor: "steelblue",
        alignItems: "center",
        justifyContent: "center",
    },

    catPhoto: { resizeMode: "stretch", width: 250, height: 300 },

    text: {
        color: "orange",
    },
});
