import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="px-4 text-gray-500 text-xs">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cardss */}
        <RestaurantCard
          id={123}
          imageUrl={"https://links.papareact.com/gn7"}
          title="Yo Sushi"
          rating={4.5}
          genre={"Japaneese"}
          address={"123 Main 51"}
          short_description={"This is a test description"}
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imageUrl={"https://links.papareact.com/gn7"}
          title="Yo Sushi"
          rating={4.5}
          genre={"Japaneese"}
          address={"123 Main 51"}
          short_description={"This is a test description"}
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imageUrl={"https://links.papareact.com/gn7"}
          title="Yo Sushi"
          rating={4.5}
          genre={"Japaneese"}
          address={"123 Main 51"}
          short_description={"This is a test description"}
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
