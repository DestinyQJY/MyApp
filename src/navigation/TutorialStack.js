import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import RecommendScreen from '../screens/Home/Tutorial/RecommendScreen'
import SubscribeScreen from '../screens/Home/Tutorial/SubscribeScreen'

const Tab = createMaterialTopTabNavigator()

export default function TutorialStack() {
    return (
        <Tab.Navigator
            initialRouteName="Recommend"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#338CFF'
                },
                tabBarItemStyle: {
                    borderWidth: 1,
                    borderColor: '#3187F6'
                },
                tabBarPressColor: '#4D9AFF',
                tabBarActiveTintColor: '#DFECFC',
                tabBarInactiveTintColor: '#BCC0C5',
            }}
        >
            <Tab.Screen
                name="Subscribe"
                component={SubscribeScreen}
                options={{
                    title: '关注',
                }}
            />
            <Tab.Screen
                name="Recommend"
                component={RecommendScreen}
                options={{
                    title: '推荐'
                }}
            />
        </Tab.Navigator>
    )
}