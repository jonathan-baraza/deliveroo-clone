import { ScrollView, View, Text } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="testing 1"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="testing 2"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="testing 3"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="testing 4"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="testing 5"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="testing 6"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="testing 7"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="testing 8"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="testing 9"
      />
    </ScrollView>
  );
};

export default Categories;
