import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const dummyDaycare = {
  id: "1",
  name: "Happy Kids Daycare",
  address: "123 Main St, Anytown, USA",
  phone: "(555) 123-4567",
  email: "info@happykids.com",
  rating: 4.5,
  description: "A nurturing environment for your child to learn and grow.",
  services: ["Full-day care", "Part-time care", "After-school programs"],
  hours: "Monday - Friday: 7:00 AM - 6:00 PM",
  images: [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ],
};

export default function DaycareProfileScreen() {
  const { id } = useLocalSearchParams();
  // In a real app, you would fetch the daycare data based on the id
  // For now, we'll use the dummy data

  return (
    <ScrollView className="flex-1 bg-white">
      <Image source={{ uri: dummyDaycare.images[0] }} className="w-full h-64" />
      <View className="p-4">
        <Text className="text-2xl font-bold mb-2">{dummyDaycare.name}</Text>
        <View className="flex-row items-center mb-2">
          <FontAwesome name="star" size={20} color="#FFD700" />
          <Text className="ml-1">{dummyDaycare.rating}</Text>
        </View>
        <Text className="text-gray-600 mb-4">{dummyDaycare.address}</Text>
        <Text className="font-bold mb-2">Description</Text>
        <Text className="mb-4">{dummyDaycare.description}</Text>
        <Text className="font-bold mb-2">Services</Text>
        {dummyDaycare.services.map((service, index) => (
          <Text key={index} className="mb-1">
            • {service}
          </Text>
        ))}
        <Text className="font-bold mt-4 mb-2">Hours</Text>
        <Text>{dummyDaycare.hours}</Text>
        <Text className="font-bold mt-4 mb-2">Contact</Text>
        <Text>Phone: {dummyDaycare.phone}</Text>
        <Text>Email: {dummyDaycare.email}</Text>
      </View>
    </ScrollView>
  );
}
