import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeSvg from '../assets/home.svg';
import CarSvg from '../assets/car.svg';
import UserSvg from '../assets/people.svg';

import { StackRoutes } from './app.stack.routes';
import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { Icon } from '../assets/index';
import { Profile } from '../screens/Profile';
const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.main,
        headerShown: false,
        tabBarInactiveTintColor: theme.colors.text_detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 78,
          backgroundColor: theme.colors.background_primary,
        },
      }}
    >
      <Screen
        name="Home"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="acceleration" color={color} />;
          },
        }}
      />
      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => {
            return <CarSvg width={24} height={24} fill={color} />;
          },
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => {
            return <UserSvg width={24} height={24} fill={color} />;
          },
        }}
      />
    </Navigator>
  );
}
