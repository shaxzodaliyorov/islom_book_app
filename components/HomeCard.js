import { Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Foundation";
import { useNavigation } from "@react-navigation/native";

const HomeCard = ({ title, image, author,item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="my-4 bg-white rounded-md border-gray-100 shadow-md border  overflow-hidden p-2"
      style={{ width: 170 }}
      onPress={()=>navigation.navigate("Product",{item})}
    >
      <Image source={image} className="w-[100%] h-[130px] rounded-md" />
      <View>
        <Text className="text-[18px]  font-bold text-[#876e3cfa] mt-1">
          {title.slice(0, 10)}...
        </Text>
        <Text>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCard;
