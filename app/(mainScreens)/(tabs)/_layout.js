import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        
        tabBarActiveTintColor: "#307A59",   // active icon & label color
        tabBarInactiveTintColor: "black",   // inactive color
        tabBarStyle: {
          backgroundColor: "#EEEEEE",
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          borderWidth:0
        },
        tabBarItemStyle: {
          
          justifyContent: "center",
          alignItems: "center",
          marginBottom:-1,

        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom:-5
        },
        headerShown: false,
        headerStyle:{
          borderWidth:0
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerTitle:"Home",
          headerShown:true,
          headerTitleAlign:"center",
          headerTitleStyle:{
            fontFamily:"RethinkSans",
            fontWeight:700,
            fontSize:25,
          },
          headerRight:()=>(
            <MaterialIcons name="notifications-none" size={24} color="black" 
            style={{
              marginRight:15
            }}/>
          ),
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="menu"
        options={{
            headerTitle:"Menu",
          headerShown:true,
          headerTitleAlign:"center",
          headerTitleStyle:{
            fontFamily:"RethinkSans",
            fontWeight:700,
            fontSize:25,
          },
            headerRight:()=>(
            <MaterialIcons name="notifications-none" size={24} color="black" 
            style={{
              marginRight:15
            }}/>
          ),
          tabBarLabel: "Menu",
          tabBarIcon: ({ color }) => (
            <AntDesign name="menu" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
