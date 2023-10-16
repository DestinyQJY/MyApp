import React, { useState } from 'react'
import { Alert, Button, Text, TextInput, View } from 'react-native'
import { userRegister } from '../../services/apiServices'
import styles from '../../styles/Styles'

export default function SignUpScreen({ navigation }) {
    const [userId, setUserId] = useState('')
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleRegister = async () => {
        if (userPassword !== confirmPassword) {
            Alert.alert('密码和确认密码不匹配!')
            return
        }

        // 构建请求体
        const requestBody = {
            userId: parseInt(userId),  // 确保ID是数字
            userPassword,
            userName,
        }

        try {
            // 调用API服务进行注册
            await userRegister(requestBody)
            navigation.navigate('Login')
        } catch (error) {
            if (error.status === 400) {
                Alert.alert('注册失败', '用户名已被占用')
                console.error('Username is already in use', error)
            } else {
                Alert.alert('注册失败', '网络不良')
                console.error('There was a problem with the userRegister operation:', error)
            }
        }
    }

    return (
        <View style={styles.welcomeContainer}>
            <View style={styles.loginInputContainer}>
                <Text style={styles.loginInputLabel}>用户ID</Text>
                <TextInput
                    style={styles.loginTextInput}
                    onChangeText={text => setUserId(text)}
                    value={userId}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.loginInputContainer}>
                <Text style={styles.loginInputLabel}>昵称</Text>
                <TextInput
                    style={styles.loginTextInput}
                    onChangeText={text => setUserName(text)}
                    value={userName}
                />
            </View>
            <View style={styles.loginInputContainer}>
                <Text style={styles.loginInputLabel}>密码</Text>
                <TextInput
                    style={styles.loginTextInput}
                    onChangeText={text => setUserPassword(text)}
                    value={userPassword} secureTextEntry
                />
            </View>
            <View style={styles.loginInputContainer}>
                <Text style={styles.loginInputLabel}>确认密码</Text>
                <TextInput
                    style={styles.loginTextInput}
                    onChangeText={text => setConfirmPassword(text)}
                    value={confirmPassword} secureTextEntry
                />
            </View>
            <Button title="注册" onPress={handleRegister} />
        </View>
    )
}