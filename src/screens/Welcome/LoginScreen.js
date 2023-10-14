import { Button, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function LoginScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
            <Text>用户名</Text>
            <TextInput />
            <Text>密码</Text>
            <TextInput />
            <Button title="登录" onPress={() => navigation.navigate('Home')} />
            <Button title="注册" onPress={() => navigation.navigate('SignUp')} />
        </View>
    )
}
