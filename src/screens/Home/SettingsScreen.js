import { Alert, Image, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../../styles/Styles'

export default function SettingsScreen() {
  return (
    <View style={styles.homeContainer}>
      <TouchableOpacity
        style={{ width: 80, height: 80 }}
        onPress={() => { Alert.alert('点击头像成功\n“更换头像”功能开发中') }}
      >
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ flex: 1 }}
        />
      </TouchableOpacity>

      <View style={{ height: 80 }}></View>

      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => { Alert.alert('点击切换账号按钮成功\n“切换账号”功能开发中') }}
      >
        <Text style={styles.settingsText}>切换账号</Text>
      </TouchableOpacity>

      <View style={{ height: 20 }}></View>

      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => { Alert.alert('点击退出登录按钮成功\n“退出登录”功能开发中') }}
      >
        <Text style={styles.settingsText}>退出登录</Text>
      </TouchableOpacity>
    </View>
  )
}