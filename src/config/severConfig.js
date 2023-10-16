// 服务器配置 
const severConfig = {
    host: '152.136.45.88',
    port: 5000,
}

// 用户登录
const postUserLoginUrl = (userid, password) => (
    `http://${severConfig.host}:${severConfig.port}/api/user/login?userid=${userid}&password=${password}`
)

// 用户注册
const postUserRegisterUrl = () => (
    `http://${severConfig.host}:${severConfig.port}/api/user/register`
)

// 获取产品库信息
const getProductDataUrl = () => (
    `http://${severConfig.host}:${severConfig.port}/api/products`
)


export { postUserLoginUrl, postUserRegisterUrl, getProductDataUrl }

export default severConfig
