import { View, Text, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassCircleIcon,
  MapPinIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { ScrollView } from "react-native";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}

      <View className="flex-row pb-3 mx-4 items-center space-x-2 ">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-sm text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center px-4 py-2">
        <View className="flex-row items-center space-x-2 flex-1 bg-gray-200 p-3 mr-1 rounded-xl">
          <MagnifyingGlassCircleIcon size={26} color="gray" />
          <TextInput
            keyboardType="default"
            placeholder="Restaurants and cuisines"
          />
        </View>
        <AdjustmentsVerticalIcon className="" size={25} color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured */}
        <FeaturedRow
          id="1"
          title={"Featured"}
          description={"Paid placements for our partners"}
        />

        {/* Tasty Discounts */}
        <FeaturedRow
          id="2"
          title={"Featured"}
          description={"Paid placements for our partners"}
        />

        {/* Offers Near you */}
        <FeaturedRow
          id="3"
          title={"Featured"}
          description={"Paid placements for our partners"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
