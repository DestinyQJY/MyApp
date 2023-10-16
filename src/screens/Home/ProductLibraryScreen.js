import { Alert, View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import { fetchProductData } from '../../services/apiServices'
import ProductLibraryDisplay from '../../components/ProductLibraryDisplay'
import styles from '../../styles/Styles'

export default function ProductLibraryScreen() {
  // 存储产品库信息
  const [productData, setProductData] = useState([])

  // 组件加载时获取产品信息
  useEffect(() => {
    // 创建一个新的 AbortController
    const abortController = new AbortController()

    // 定义一个异步函数在这个作用域内
    const loadProductData = async () => {
      try {
        const data = await fetchProductData(abortController.signal)  // 传递 abort signal
        setProductData(data)
      } catch (error) {
        Alert.alert("加载失败", "请检查网络")
        console.error('There was a problem with the loadProductData operation:', error)
      }
    }

    // 调用该函数
    loadProductData()

    // useEffect 的清理函数
    return () => {
      // 当组件卸载时，中止 fetch
      abortController.abort()
    }
  }, [])
  // 空数组表示仅在组件加载时执行一次useEffect内的代码，而不会在每次组件重新渲染时都执行

  return (
    <View style={styles.homeContainer}>
      {productData.length === 0 && <Text>获取产品库信息失败</Text>}
      {productData.length > 0 && ProductLibraryDisplay(productData)}
    </View>
  )
}