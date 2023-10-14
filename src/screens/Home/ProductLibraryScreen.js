import { Alert, View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import { getProductDataApi } from '../../config/severConfig'
import ProductLibraryDisplay from '../../components/ProductLibraryDisplay'

export default function ProductLibraryScreen() {
  // 获取产品库信息的api接口
  const url = getProductDataApi()

  // 存储产品库信息
  const [productData, setProductData] = useState([])

  // 组件加载时获取产品信息
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // 处理响应
        // 更新productData
        setProductData(data)
      })
      .catch(error => {
        // 处理错误
        Alert.alert("失败", "网络不良！")
      })
  }, [])
  // 空数组表示仅在组件加载时执行一次useEffect内的代码，而不会在每次组件重新渲染时都执行

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E7F6FF' }}>
      {productData.length === 0 && <Text>获取产品库信息失败</Text>}
      {productData.length > 0 && ProductLibraryDisplay(productData)}
    </View>
  )
}