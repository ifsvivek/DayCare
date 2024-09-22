import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "expo-router";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [userRole, setUserRole] = useState("parent");
  const { login, signup } = useAuth();
  const router = useRouter();

  const handleAuth = async () => {
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password, userRole);
      }
      router.replace("/");
    } catch (error) {
      console.error("Authentication error:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <Text className="text-2xl font-bold mb-6">
        {isLogin ? "Login" : "Sign Up"}
      </Text>
      <TextInput
        className="w-full bg-gray-100 rounded-md p-2 mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="w-full bg-gray-100 rounded-md p-2 mb-4"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {!isLogin && (
        <View className="flex-row mb-4">
          <TouchableOpacity
            className={`px-4 py-2 rounded-md ${
              userRole === "parent" ? "bg-blue-500" : "bg-gray-300"
            }`}
            onPress={() => setUserRole("parent")}
          >
            <Text
              className={`${
                userRole === "parent" ? "text-white" : "text-black"
              }`}
            >
              Parent
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`px-4 py-2 rounded-md ml-2 ${
              userRole === "provider" ? "bg-blue-500" : "bg-gray-300"
            }`}
            onPress={() => setUserRole("provider")}
          >
            <Text
              className={`${
                userRole === "provider" ? "text-white" : "text-black"
              }`}
            >
              Provider
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        className="w-full bg-blue-500 rounded-md p-2 items-center"
        onPress={handleAuth}
      >
        <Text className="text-white font-bold">
          {isLogin ? "Login" : "Sign Up"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="mt-4" onPress={() => setIsLogin(!isLogin)}>
        <Text className="text-blue-500">
          {isLogin
            ? "Need an account? Sign up"
            : "Already have an account? Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
