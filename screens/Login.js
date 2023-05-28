import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import logo from "../assets/Islombook.jpg";
import { StatusBar } from "expo-status-bar";
const Login = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const loginSubmit = async () => {
    setLoading(true);
    navigation.navigate("Dashbord");
    setLoading(false)
  };

  return (
    <View className="flex-1 bg-[#fff]  items-center justify-center">
      <View className="w-[100%] py-2 flex justify-center items-center">
        <Image source={logo} className="w-[135px] h-[85px]" />
      </View>
      <View className="w-[100%] py-5 px-4 flex justify-center items-center">
        <TextInput
          placeholder="Login"
          className="w-[100%] my-4 border-[1px] py-3 px-2 text-xl outline-none rounded-sm border-[#e3a427]"
        />
        <TextInput
          placeholder="Password"
          className="w-[100%] my-4 border-[1px] py-3 px-2 text-xl outline-none rounded-sm border-[#e3a427]"
          returnKeyType="go"
          secureTextEntry
          autoCorrect={false}
        />
        <TouchableOpacity
          onPress={loginSubmit}
          className="w-[100%] my-4 flex justify-center items-center rounded-sm outline-none bg-[#e3a427] py-3 px-2"
        >
          <Text className="text-lg text-white">
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              "Kirish"
            )}
          </Text>
        </TouchableOpacity>
      </View>
      {/* boll */}
      <View className="w-[290px] h-[290px] rounded-full bg-[blue] absolute -bottom-32 -right-32 -z-10 "></View>
      <View className="w-[300px] h-[300px] rounded-full bg-[#e3a427] absolute -top-32 -left-36  -z-10"></View>
    </View>
  );
};

export default Login;
