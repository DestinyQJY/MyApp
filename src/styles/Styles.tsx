import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    helloText: {
        fontSize: 150,
        fontWeight: 'bold',
        color: 'white',
    },
    startButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498ff',
        width: Dimensions.get('window').width / 1.8,
        height: 65,
        borderWidth: 1.5,
        borderColor: '#56baff',
        borderRadius: 30,
        elevation: 10, // 添加阴影
    },
    startText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'black', // 阴影颜色
        textShadowOffset: { width: 1.5, height: 1.6 }, // 阴影偏移量
        textShadowRadius: 1, // 阴影半径
    },

    productItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },

    settingsButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db',
        width: Dimensions.get('window').width / 1.57,
        height: 52,
        borderRadius: 24,
    },
    settingsText: {
        fontSize: 18,
        color: 'white',
    },
})

export default styles
