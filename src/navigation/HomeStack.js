import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TutorialStack from './TutorialStack'
import ProductLibraryScreen from '../screens/Home/ProductLibraryScreen'
import VirtualTryOnScreen from '../screens/Home/VirtualTryOnScreen'
import ShoppingCartScreen from '../screens/Home/ShoppingCartScreen'
import SettingsScreen from '../screens/Home/SettingsScreen'

const Tab = createBottomTabNavigator()

export default function HomeStack() {
    return (
        <Tab.Navigator
            initialRouteName="Tutorial"
            screenOptions={({ route }) => ({
                // 设置图标
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    if (route.name === "Tutorial") {
                        iconName = focused ? "book" : "book-outline"
                    } else if (route.name === "ProductLibrary") {
                        iconName = focused ? "bag-handle" : "bag-handle-outline"
                    } else if (route.name === "VirtualTryOn") {
                        iconName = focused ? "camera" : "camera-outline"
                    }
                    else if (route.name === "ShoppingCart") {
                        iconName = focused ? "cart" : "cart-outline"
                    }
                    else if (route.name === "Settings") {
                        iconName = focused ? "settings" : "settings-outline"
                    }

                    return <Ionicons name={iconName} size={size} color={color}></Ionicons>
                },

                // 选中的tabBar的字体颜色
                tabBarActiveTintColor: '#0072c6',

                // 未选中的tabBar的字体颜色
                tabBarInactiveTintColor: '#6a6a6a',

                // 选中的tabBar的背景色
                tabBarActiveBackgroundColor: '#8ec1ff',

                // 未选中的tabBar的背景色
                tabBarInactiveBackgroundColor: '#e1f0ff',
            })}
        >
            <Tab.Screen
                name="Tutorial"
                component={TutorialStack}
                options={{
                    title: '教程',
                    headerShown: false // 隐藏标题栏
                }}
            />
            <Tab.Screen
                name="ProductLibrary"
                component={ProductLibraryScreen}
                options={{
                    title: '产品库',
                    headerShown: false // 隐藏标题栏
                }}
            />
            <Tab.Screen
                name="VirtualTryOn"
                component={VirtualTryOnScreen}
                options={{
                    title: '试妆',
                    headerShown: false // 隐藏标题栏
                }}
            />
            <Tab.Screen
                name="ShoppingCart"
                component={ShoppingCartScreen}
                options={{
                    title: '购物车',
                    headerShown: false // 隐藏标题栏
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    title: '我的',
                    headerShown: false // 隐藏标题栏
                }}
            />
        </Tab.Navigator>
    )
}
