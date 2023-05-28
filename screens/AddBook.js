import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function AddBook() {

  const navigation = useNavigation();


  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  return (
    <SafeAreaView>
      <View className="w-[100%] bg-[#e3a427]  pt-6 pb-4 flex-row  justify-between items-center px-4 fixed">
        <Text className="text-[20px] font-bold text-[#fff] py-2">
          ISLOM BOOK
        </Text>
      </View>
      <ScrollView>
        <View className="flex-row items-center justify-between gap-4 px-4 py-4" >
          <Text className="text-lg" >Kitob Qo'shish</Text>
        </View>
        <View className="w-[100%] py-20 px-4 flex justify-center items-center" >
          <TextInput placeholder="kitob nomi" className="w-[100%] my-4 border-[1px] py-3 px-2 text-xl outline-none rounded-sm border-[#e3a427]" />
          <TextInput placeholder="Mualif ismi " className="w-[100%] my-4 border-[1px] py-3 px-2 text-xl outline-none rounded-sm border-[#e3a427]" />
          <TextInput placeholder="Narxi" keyboardType="numeric" className="w-[100%] my-4 border-[1px] py-3 px-2 text-xl outline-none rounded-sm border-[#e3a427]" />
          <TextInput placeholder="To'liq manzil" className="w-[100%] my-4 border-[1px] py-3 px-2 text-xl outline-none rounded-sm border-[#e3a427]" />
          <TextInput placeholder="Telefon Raqam" keyboardType="numeric" className="w-[100%] my-4 border-[1px] py-3 px-2 text-xl outline-none rounded-sm border-[#e3a427]" />
          <View className="w-[100%] my-4 h-[150px] border-[1px] py-3 px-2 text-xl outline-none rounded-sm border-[#e3a427]" >
            <TextInput placeholder="Tavsif" multiline={true} numberOflines={10} className="text-xl" />
          </View>
          <TouchableOpacity className="w-[100%] my-4 flex justify-center items-center rounded-sm outline-none bg-[#e3a427] py-3 px-2"  >
            <Text className="text-lg text-white" >Qo'shish</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar networkActivityIndicatorVisible={false} />
    </SafeAreaView>
  );
}
