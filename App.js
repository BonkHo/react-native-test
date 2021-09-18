import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

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
                    options={{
                        name: "Home",
                        headerTitleAlign: "center",
                        headerStyle: {
                            backgroundColor: "#f4511e",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
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
