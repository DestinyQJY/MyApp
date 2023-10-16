import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    homeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E7F6FF',
    },
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
    loginInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    loginInputLabel: {
        flex: 1,
        fontSize: 14,
        marginLeft: 20,
        marginRight: 0,
    },
    loginTextInput: {
        flex: 4,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        marginRight: 30,
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