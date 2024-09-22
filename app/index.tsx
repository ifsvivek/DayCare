import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold mb-6">Welcome to Daycare App</Text>
      {user ? (
        <Link href="/search" asChild>
          <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded">
            <Text className="text-white font-semibold">Search Daycares</Text>
          </TouchableOpacity>
        </Link>
      ) : (
        <Link href="/auth" asChild>
          <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded">
            <Text className="text-white font-semibold">Login / Sign Up</Text>
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
}
