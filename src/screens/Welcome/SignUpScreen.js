import { Button, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function SignUpScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
            <Text>用户名</Text>
            <TextInput />
            <Text>密码</Text>
            <TextInput />
            <Text>确认密码</Text>
            <TextInput />
            <Button title="注册" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}