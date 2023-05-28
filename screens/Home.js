import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import cardTestimage from "../assets/Islombook1.jpg";
import HomeCard from "../components/HomeCard";
import { Image } from "react-native";
import swap1 from "../assets/swap-1.png";
import swap2 from "../assets/swap-2.jpg";
import swap3 from "../assets/swap-3.png";
import swap4 from "../assets/swap-4.png";

const Home = () => {
  const navigation = useNavigation();

  const [searachBar, setSearchBar] = useState(false);
  const [imageActive, setImageActive] = useState(0);
  const [search, setSearch] = useState("")
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const dataimage = [swap1, swap2, swap3, swap4];

  const books = [
    {
      id: 1,
      title: "Sariq",
      author: "Xudayberdi To'xtamoyev",
      price: "10.0 $",
      discription:
        "bu qissa xudoyberdi textaboyevnng sariq devni minib asari bo'lib und hoshimjonni sarguzashlari haqida gap ketadi !",
      number: "+99 833 506 07 11",
      loction: "Surxondaryo vil Bandixon Tumani Islom book do'koni ",
      loctionhref: "https://localhost:3000",
      image: cardTestimage,
    },
    {
      id: 2,
      title: "Kun Tug'mish",
      author: "Xaliq Ijodi",
      price: "8.0 $",
      discription:
        "bu qissa xudoyberdi textaboyevnng sariq devni minib asari bo'lib und hoshimjonni sarguzashlari haqida gap ketadi !",
      number: "+99 833 506 07 11",
      loction: "Surxondaryo vil Bandixon Tumani Islom book do'koni ",
      loctionhref: "https://localhost:3000",
      image: cardTestimage,
    },
    {
      id: 3,
      title: "Farhod va Shirin",
      author: "Alisher Navoiy",
      price: "14.0 $",
      discription:
        "bu qissa xudoyberdi textaboyevnng sariq devni minib asari bo'lib und hoshimjonni sarguzashlari haqida gap ketadi ! textaboyevnng sariq devni minib asari bo'lib und hoshimjonni sarguzashlari haqida gap ketadi !textaboyevnng sariq devni minib asari bo'lib und hoshimjonni sarguzashlari haqida gap ketadi !",
      number: "+99 833 506 07 11",
      loction: "Surxondaryo vil Bandixon Tumani Islom book do'koni ",
      loctionhref: "https://localhost:3000",
      image: cardTestimage,
    },
    {
      id: 3,
      title: "Farhod va Shirin",
      author: "Alisher Navoiy",
      price: "14.0 $",
      discription:
        "bu qissa xudoyberdi textaboyevnng sariq devni minib asari bo'lib und hoshimjonni sarguzashlari haqida gap ketadi !",
      number: "+99 833 506 07 11",
      loction: "Surxondaryo vil Bandixon Tumani Islom book do'koni ",
      loctionhref: "https://localhost:3000",
      image: cardTestimage,
    },
    {
      id: 3,
      title: "Farhod va Shirin",
      author: "Alisher Navoiy",
      price: "14.0 $",
      discription:
        "bu qissa xudoyberdi textaboyevnng sariq devni minib asari bo'lib und hoshimjonni sarguzashlari haqida gap ketadi !",
      number: "+99 833 506 07 11",
      loction: "Surxondaryo vil Bandixon Tumani Islom book do'koni ",
      loctionhref: "https://localhost:3000",
      image: cardTestimage,
    },
    {
      id: 3,
      title: "Farhod va Shirin",
      author: "Alisher Navoiy",
      price: "14.0 $",
      discription:
        "bu qissa xudoyberdi textaboyevnng sariq devni minib asari bo'lib und hoshimjonni sarguzashlari haqida gap ketadi !",
      number: "+99 833 506 07 11",
      loction: "Surxondaryo vil Bandixon Tumani Islom book do'koni ",
      loctionhref: "https://localhost:3000",
      image: cardTestimage,
    },
    {
      id: 3,
      title: "Farhod va Shirin",
      author: "Alisher Navoiy",
      price: "14.0 $",
      discription:
        "bu qissa xudoyberdi textaboyevnng sariq devni minib asari bo'lib und hoshimjonni sarguzashlari haqida gap ketadi !",
      number: "+99 833 506 07 11",
      loction: "Surxondaryo vil Bandixon Tumani Islom book do'koni ",
      loctionhref: "https://localhost:3000",
      image: cardTestimage,
    },
    {
      id: 3,
      title: "Farhod va Shirin",
      author: "Alisher Navoiy",
      price: "14.0 $",
      discription:
        "bu qissa xudoyberdi textaboyevnng sariq devni minib asari bo'lib und hoshimjonni sarguzashlari haqida gap ketadi !",
      number: "+99 833 506 07 11",
      loction: "Surxondaryo vil Bandixon Tumani Islom book do'koni ",
      loctionhref: "https://localhost:3000",
      image: cardTestimage,
    },
  ];

  const WIDTH = Dimensions.get("window").width;

  const onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imageActive) {
        setImageActive(slide);
      }
    }
  };

  const toggleSearchBar = () => {
    setSearchBar(!searachBar)
    setSearch("")
  }

  return <>
    <SafeAreaView className="flex-1">
      {/* header */}
      <View className="w-[100%] bg-[#e3a427]  py-6 flex-row  justify-between items-center px-6 fixed">
        {searachBar ? (
          <View className="w-[100%] h-[100%] bg-[#fff] rounded-[10px] flex-row justify-between px-2 py-2">
            <TextInput
              className="w-[80%] text-[17px]"
              placeholder="Qidiruv"
              keyboardType="web-search"
              onChangeText={text => setSearch(text)}
            />
            <TouchableOpacity onPress={toggleSearchBar}>
              <Ionicons name="close" size={25} color="#000" />
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <Text className="text-[20px] font-bold text-[#fff] py-2">
              ISLOM BOOK
            </Text>
            <TouchableOpacity onPress={toggleSearchBar}>
              <Ionicons name="search" size={25} color="#fff" />
            </TouchableOpacity>
          </>
        )}
      </View>
      <ScrollView className="px-6">
        <View className="py-6 relative">
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={dataimage}
            keyExtractor={(item, index) => index}
            pagingEnabled
            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{ width: WIDTH - 65 }}
                  className="h-[180px] rounded-md mx-2 overflow-hidden"
                >
                  <Image source={item} className="w-[100%] h-[100%]" />
                </View>
              );
            }}
          />
          <View className="absolute bottom-0 flex-row self-center ">
            {dataimage.map((item, index) => {
              return (
                <View
                  key={index}
                  className={`${imageActive === index
                    ? "mx-2 w-[8px] h-[8px] bg-[#e3a427]  rounded-full"
                    : "mx-2 w-[8px] h-[8px] bg-[#000]  rounded-full"
                    } `}
                ></View>
              );
            })}
          </View>
        </View>
        <View className=" flex-row justify-start py-4">
          <Text className="text-[20px] ">Ijimoiy Tarmoqlar</Text>
        </View>
        <View className="flex-row justify-between py-4">
          <TouchableOpacity>
            <Fontisto name="world-o" size={60} color={"#e3a427"} />
            <Text className="text-center mt-2 text-[14px]">Web Sahifa</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Fontisto name="telegram" size={60} color={"#e3a427"} />
            <Text className="text-center mt-2 text-[14px]">Telegram</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Fontisto name="instagram" size={60} color={"#e3a427"} />
            <Text className="text-center mt-2 text-[14px]">Instagram</Text>
          </TouchableOpacity>
        </View>
        <View className=" flex-row justify-start py-4">
          <Text className="text-[20px] ">Barcha Kitoblar</Text>
        </View>
        <View className="w-[100%] flex-row flex-wrap justify-between">
          {books.filter((item) => {
            if (item.title.toLowerCase().includes(search.toLowerCase())) {
              return item
            } else if (search === "") {
              return item
            }
          }).map((item, index) => {
            return (
              <HomeCard
                key={index}
                image={item.image}
                title={item.title}
                author={item.author}
                item={item}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
    <StatusBar networkActivityIndicatorVisible={false} />
  </>
};

export default Home;