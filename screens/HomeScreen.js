import { View, Text, Image } from "react-native";
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

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      {/* Header */}

      <View className="flex-row pb-3 mx-4 items-center space-x-2 pt-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View>
          <Text className="font-sm text-gray-400 text-xs">Deliver Now!</Text>
          <Text  className="font-bold text-xl">
            Current Location <ChevronDownIcon  size={20} color="#00CCBB" />
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
