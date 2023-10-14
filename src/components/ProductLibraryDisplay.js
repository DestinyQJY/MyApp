import { View, Text, FlatList } from 'react-native'
import styles from '../styles/Styles'

const ProductLibraryDisplay = (productData) => {
    const renderItem = ({ item }) => (
        <View style={styles.productItem}>
            <Text>{`Product ID: ${item.Product_ID}`}</Text>
            <Text>{`Product Name: ${item.Product_Name}`}</Text>
            <Text>{`Product Price: ${item.Product_Price}`}</Text>
        </View>
    )

    return (
        <FlatList
            data={productData}
            renderItem={renderItem}
            keyExtractor={(item) => item.Product_ID.toString()}
        />
    )
}

export default ProductLibraryDisplay
