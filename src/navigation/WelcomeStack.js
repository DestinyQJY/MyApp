import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from '../screens/Welcome/WelcomeScreen'
import LoginScreen from '../screens/Welcome/LoginScreen'
import SignUpScreen from '../screens/Welcome/SignUpScreen'
import HomeStack from './HomeStack.js'

const Stack = createStackNavigator()

export default function WelcomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#3498ff' },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          title: 'Welcome Screen',
          headerShown: false // 隐藏标题栏
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '登录',
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: '注册',
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: 'Home Stack',
          headerShown: false // 隐藏标题栏
        }}
      />
    </Stack.Navigator>
  )
}