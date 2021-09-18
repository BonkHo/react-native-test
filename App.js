import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";

// Components
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "Overview" }}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    initialParams={{ itemId: 42 }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

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
