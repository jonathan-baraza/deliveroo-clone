import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";

const CategoryCard = ({ imageUrl, title }) => {
  return (
    <View className="flex-1 border relative rounded-xl  border-gray-200 bg-white">
      <ImageBackground
        resizeMode="center"
        className="h-[150px] w-[200px] p-2 "
        source={{ uri: imageUrl }}
        style={{ margin: 15 }}
      ></ImageBackground>
      <View
        className="rounded-xl absolute items-end justify-end p-4 top-0 bottom-0 left-0 right-0 z-30"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <Text className="text-white text-xl font-extrabold">Fast delivery</Text>
      </View>
    </View>
  );
};

export default CategoryCard;
