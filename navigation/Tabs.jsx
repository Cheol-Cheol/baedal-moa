import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Chat from "../screens/Chat";
import OrderList from "../screens/OrderList";
import User from "../screens/User";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator initialRouteName="Tv">
    <Tab.Screen
      name="홈"
      component={Home}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <Ionicons name="home-sharp" size={size} color="#3772FF" />;
        },
      }}
    />
    <Tab.Screen
      name="채팅"
      component={Chat}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Ionicons name="chatbox-ellipses" size={size} color="#3772FF" />
          );
        },
      }}
    />
    <Tab.Screen
      name="주문내역"
      component={OrderList}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <Ionicons name="receipt" size={size} color="#3772FF" />;
        },
      }}
    />
    <Tab.Screen
      name="내 정보"
      component={User}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <FontAwesome name="user" size={size} color="#3772FF" />;
        },
      }}
    />
  </Tab.Navigator>
);

export default Tabs;
