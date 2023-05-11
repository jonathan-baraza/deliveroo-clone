import { ScrollView, View, Text } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
        columnGap: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard
        imageUrl="https://links.papareact.com/wru"
        title="testing"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/wru"
        title="testing"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/wru"
        title="testing"
      />
    </ScrollView>
  );
};

export default Categories;
