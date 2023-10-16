import { Button, Text, TextInput, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { userLogin } from '../../services/apiServices'
import styles from '../../styles/Styles'

export default function LoginScreen({ navigation }) {
    const [userID, setuserID] = useState('')
    const [userPassword, setuserPassword] = useState('')

    const handleLogin = async () => {
        try {
            await userLogin(userID, userPassword)
            navigation.navigate('Home')
        } catch (error) {
            Alert.alert('登录失败', '请检查用户名和密码')
            console.error('There was a problem with the userLogin operation:', error)
        }
    }

    return (
        <View style={styles.welcomeContainer}>
            <View style={styles.loginInputContainer}>
                <Text style={styles.loginInputLabel}>用户名</Text>
                <TextInput
                    style={styles.loginTextInput}
                    onChangeText={text => setuserID(text)}
                    value={userID}
                />
            </View>

            <View style={styles.loginInputContainer}>
                <Text style={styles.loginInputLabel}>密码</Text>
                <TextInput
                    style={styles.loginTextInput}
                    onChangeText={text => setuserPassword(text)}
                    value={userPassword}
                    secureTextEntry={true}
                />
            </View>

            <View style={{ height: 30 }}></View>

            <Button title="登录" onPress={handleLogin} />

            <View style={{ height: 12 }}></View>

            <Button title="注册" onPress={() => navigation.navigate('SignUp')} />
        </View>
    )
}