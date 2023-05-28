import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./Home";
import { useNavigation } from "@react-navigation/native";
import AddBook from "./AddBook";
import Settings from "./settings"
const Tab = createBottomTabNavigator();
const Dashbord = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
              size = focused ? size + 6 : size;
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
              size = focused ? size + 8 : size;
            } else if (route.name === "Addbook") {
              iconName = focused ? "add-circle" : "add-circle-outline";
              size = focused ? size + 20 : size + 5;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#e3a427",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Addbook" component={AddBook} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </>
  );
};

export default Dashbord;
