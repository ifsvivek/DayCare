import React, { useState } from "react";
import { Text, View, Button } from "react-native";

export default function HomeScreen() {
    const [count, setCount] = useState(0);

    return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-bold">Hello World</Text>
            <Text className="text-lg">Counter: {count}</Text>
            <Button title="Increment" onPress={() => setCount(count + 1)} />
        </View>
    );
}
