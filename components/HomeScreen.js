import React, { useState, useLayoutEffect } from "react";
import { Text, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    onPress={() => setCount((count) => count + 1)}
                    title="Update Count"
                />
            ),
        });
    }, [navigation, setCount]);

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text>Count: {count}</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    navigation.navigate("Details");
                }}
            />
        </View>
    );
};

export default HomeScreen;
