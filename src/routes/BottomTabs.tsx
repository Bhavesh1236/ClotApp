import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { AppIcons } from '../components';
import { Colors, isDarkMode, Sizes } from '../assets/styles/AppThems';
import { HomeScreen, WishlistScreen, OrdersScreen, ProfileScreen } from '../screens';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {            
          backgroundColor: isDarkMode ? Colors.appColor2 : Colors.lightGray,
          height: 70,
          paddingTop: Sizes.padding2
        },
        headerShown: false,
      }}

    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AppIcons name="home" type='AntDesign' size={24} color={focused ? Colors.appColor : Colors.gray2} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AppIcons name="notifications-outline" type='Ionicons' size={24} color={focused ? Colors.appColor : Colors.gray2} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AppIcons name="shopping-cart" type='Feather' size={24} color={focused ? Colors.appColor : Colors.gray2} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AppIcons name="user-o" type='FontAwesome' size={24} color={focused ? Colors.appColor : Colors.gray2} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
