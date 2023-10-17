# 配置

## 使用 NavigationContainer 的配置操作
参考：https://reactnavigation.org/docs/getting-started

1.npm install @react-navigation/native
2.npm install react-native-screens react-native-safe-area-context
3.Edit MainActivity.java file which is located in android/app/src/main/java/<your package name>/MainActivity.java
4.Add import statement at the top of this file below your package statement
5.Wrapping your app in NavigationContainer

## 使用 Stack Navigator 的配置操作
参考：https://reactnavigation.org/docs/stack-navigator#installation

1.npm install @react-navigation/stack
2.npm install react-native-gesture-handler
3.add the following at the top: import 'react-native-gesture-handler';

### 注意
当一边按照配置操作调试，一边热更新的时候，极有可能出现如下报错：
ERROR  Invariant Violation: requireNativeComponent: "RNSScreen" was not found in the UIManager.

造成该问题的原因我并不清楚，但是解决办法如下：
That usually happens when you install all packages to add navigation without terminating the running build. Make sure to stop the running process for ( android or IOS ) then run it again after installing them and adding the routing components
关闭正在运行的App实例，关闭模拟器，重新安装React Navigation相关的包，然后即可解决该问题

## 使用 Bottom Tabs Navigator 的配置操作
参考：https://reactnavigation.org/docs/bottom-tab-navigator

1.npm install @react-navigation/bottom-tabs

## 使用 Material Top Tabs Navigator 的配置操作
参考：https://reactnavigation.org/docs/material-top-tab-navigator

1.npm install @react-navigation/material-top-tabs react-native-tab-view
2.npm install react-native-pager-view

## 配置 react-native-vector-icons 库
参考：https://github.com/oblador/react-native-vector-icons#installation

1.npm install --save react-native-vector-icons
2.Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")



# 命令

## 创建项目
npx react-native@latest init Project_Name
npx react-native@X.XX.X init Project_Name --version X.XX.X

## 启动项目
npx react-native run-android
yarn start
yarn android

## 清除缓存
npm start -- --reset-cache

## 清除缓存并启动
npx react-native start --reset-cache

## 清除终端历史记录
Remove-Item (Get-PSReadlineOption).HistorySavePath



# 发布

## 安卓使用http的相关配置

### 创建xml文件夹及network_security_config.xml文件
在androd/app/src/res中创建xml目录，再创建network_security_config.xml文件，然后添加：
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true">
        <trust-anchors>
            <certificates src="system" />
        </trust-anchors>
    </base-config>
</network-security-config>

### 配置AndroidManifest.xml文件
然后，确保您的AndroidManifest.xml文件（位于androd/app/src/main/）引用了这个网络安全配置：
<application
    android:networkSecurityConfig="@xml/network_security_config"
    ...>
</application>

## 清除缓存
npx react-native start --reset-cache

## 启动模拟器
yarn android

## 生成aab文件
cd android
./gradlew bundleRelease

### 文件位置
android/app/build/outputs/bundle/release/app-release.aab

## 生成apk文件
cd android
./gradlew assembleRelease

### 文件位置
android/app/build/outputs/apk/release/app-release.apk
