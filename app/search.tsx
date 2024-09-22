import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const dummyData = [
  { id: "1", name: "Happy Kids Daycare", address: "123 Main St", rating: 4.5 },
  { id: "2", name: "Sunshine Childcare", address: "456 Elm St", rating: 4.2 },
  { id: "3", name: "Bright Beginnings", address: "789 Oak St", rating: 4.0 },
  { id: "4", name: "Little Explorers", address: "101 Pine St", rating: 4.3 },
  { id: "5", name: "Tiny Tots", address: "202 Maple St", rating: 4.1 },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const router = useRouter();

  const renderDaycareItem = ({ item }) => (
    <TouchableOpacity
      className="bg-white p-4 mb-2 rounded-md shadow-sm"
      onPress={() => router.push(`/daycare/${item.id}`)}
    >
      <Text className="text-lg font-bold">{item.name}</Text>
      <Text className="text-gray-600">{item.address}</Text>
      <Text className="text-yellow-500">Rating: {item.rating}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <View className="flex-row items-center mb-4">
        <TextInput
          className="flex-1 bg-white rounded-md p-2 mr-2"
          placeholder="Search daycares..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity onPress={() => setShowFilters(!showFilters)}>
          <FontAwesome name="filter" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {showFilters && (
        <View className="bg-white p-4 mb-4 rounded-md">
          <Text className="text-lg font-bold mb-2">Filters</Text>
          {/* Add filter options here */}
        </View>
      )}
      <FlatList
        data={dummyData}
        renderItem={renderDaycareItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
