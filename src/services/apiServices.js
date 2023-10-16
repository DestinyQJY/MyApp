import { postUserLoginUrl, postUserRegisterUrl, getProductDataUrl } from '../config/severConfig'

// 用户登录
const userLogin = async (userID, userPassword) => {
    // 设置url
    const url = postUserLoginUrl(userID, userPassword)
    
    try {
        const response = await fetch(url, { method: 'POST' })
        if (!response.ok) {
            throw new Error('Login failed')
        }
    } catch (error) {
        console.error('There was a problem with the userLogin operation:', error)
        // 重新抛出错误，以便调用者可以处理它
        throw error
    }
}


// 用户注册
const userRegister = async (userInfo) => {
    // 设置url
    const url = postUserRegisterUrl()

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        })

        // 处理response
        if (!response.ok) {
            if (response.status === 400) {
                const error = new Error('UserID is already in use')
                error.status = 400  // 将状态码添加到错误对象
                throw error
            } else {
                const error = new Error('Network response was not ok')
                error.status = response.status  // 将状态码添加到错误对象
                throw error
            }
        }
    } catch (error) {
        console.error('There was a problem with the user registration operation:', error)
        // 重新抛出错误，以便调用者可以处理它
        throw error
    }
}


// 获取产品库信息
const fetchProductData = async (signal) => {  // 接收一个 abort signal
    // 设置url
    const url = getProductDataUrl()

    try {
        const response = await fetch(url, { signal })  // 传递 signal 给 fetch
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        // 异步解析
        const productData = await response.json()
        return productData
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Fetch aborted')
        } else {
            console.error('There was a problem with the fetchProductData operation:', error)
        }
        // 重新抛出错误，以便调用者可以处理它
        throw error
    }
}


export { userLogin, userRegister, fetchProductData }
