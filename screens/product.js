import { View, Text, SafeAreaView, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Feather, FontAwesome, FontAwesome5, Entypo, Foundation } from "react-native-vector-icons"
export default function Product(props) {

  const { title, author, price, discription, number, loction, image } = props.route.params.item

  const navigation = useNavigation();

  const HEIGHT = Dimensions.get("window").height;

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {/* navbar and Image*/}
        <View className={"relative w-full"} >
          <Image source={image} className={"w-full rounded-sm"} style={{ height: HEIGHT / 3 - 1 }} />
          <View className="absolute left-0 top-0 bottom-0 right-0 w-full h-full bg-black/40" ></View>
          <View className="absolute left-5 top-10" >
            <TouchableOpacity onPress={() => navigation.goBack()} >
              <Feather name={"arrow-left"} size={30} color={"#fff"} />
            </TouchableOpacity>
          </View>
          <View className=" w-full absolute left-5 bottom-5"  >
            <Text className="text-2xl  text-[#fff]" >{title}</Text>
          </View>
        </View>
        <View className="flex-row items-center justify-start gap-4 px-4 py-4" >
          <Text className="text-3xl text-[#e3a427]" >{title}</Text>
        </View>
        <View className="flex-row items-center justify-between gap-4 px-4 py-4"  >
          <Text className="text-lg" >
            {discription}
          </Text>
        </View>
        <View className="flex-row items-center justify-between gap-4 px-4 py-4" >
          <AntDesign name="book" size={25} />
          <Text className="text-xl " >{title}</Text>
        </View>
        <View className="flex-row items-center justify-between gap-4 px-4 py-4"  >
          <FontAwesome5 name="pen-nib" size={25} />
          <Text className="text-xl " >{author}</Text>
        </View>
        <View className="flex-row items-center justify-between gap-4 px-4 py-4"  >
          <FontAwesome name="dollar" size={25} />
          <Text className="text-xl " >{price}</Text>
        </View>
        <View className="flex-row items-center justify-between gap-4 px-4 py-4"  >
          <FontAwesome5 name="map-marker-alt" size={25} />
          <Text className="text-sm" >{loction}</Text>
        </View>
        <View className="flex-row items-center justify-between gap-4 px-4 py-4"  >
          <Foundation name="telephone" size={25} />
          <Text className="text-sm" >{number}</Text>
        </View>

        <View className="flex-row items-center justify-center  gap-4 px-4 py-4"  >
          <TouchableOpacity className="bg-red-500 w-full py-4 rounded-sm " onPress={() => navigation.goBack()} >
            <Text className="text-center text-white text-lg "  >O'chirish</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center justify-center  gap-4 px-4 py-4"  >
          <TouchableOpacity className="bg-[#e3a427] w-full py-4 rounded-sm " onPress={() => navigation.goBack()} >
            <Text className="text-center text-white text-lg "  >Chiqish</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}