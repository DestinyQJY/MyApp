const severConfig = {
    host: '152.136.45.88',
    port: 5000,
}

const getProductDataApi = () => (
    `http://${severConfig.host}:${severConfig.port}/api/products`
)

export { getProductDataApi }

export default severConfig
