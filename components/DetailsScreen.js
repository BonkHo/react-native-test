import React from "react";
import { Text, View, Button } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Details Screen</Text>

            <Button
                title="Go to Details... again"
                onPress={() =>
                    navigation.push("Details", {
                        itemId: Math.floor(Math.random() * 100),
                    })
                }
            />
            <Button
                title="Go back to home"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
};

export default DetailsScreen;
