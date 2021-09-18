import React, { useState, useLayoutEffect } from "react";
import { Text, View, Button } from "react-native";
import styles from "../styles";

const HomeScreen = ({ navigation }) => {
    const [count, setCount] = useState(0);

    return (
        <>
            <Text>Count: {count}</Text>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                }}
            >
                <Button
                    style={styles.leftButton}
                    onPress={() => setCount((count) => count + 1)}
                    title="Update Count"
                />
                <Button
                    style
                    title="Go to Details"
                    onPress={() => {
                        navigation.navigate("Details");
                    }}
                />
                <Button
                    style="right-button"
                    onPress={() => setCount((count) => count + 1)}
                    title="Update Count"
                />
            </View>
        </>
    );
};

export default HomeScreen;
