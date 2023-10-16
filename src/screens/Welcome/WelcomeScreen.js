import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from '../../styles/Styles'

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.welcomeContainer}>
            <StatusBar hidden={true} />
            <ImageBackground
                source={require('../../images/background.jpg')}
                resizeMode='cover'
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}
            >
                <Text style={styles.helloText}>Hello</Text>
                <TouchableOpacity
                    style={styles.startButton}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.startText}>Start Now!</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}