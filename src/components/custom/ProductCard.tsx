import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import AppText from '../shared/AppText'
import Styles from '../../assets/styles'

const ProductCard = ({item}: any) => {
  return (
    <TouchableOpacity key={item.id} style={Styles.productCard}>
			<Image source={item.image} style={Styles.productImage} />
			<AppText style={Styles.productName}>{item.name}</AppText>
			<AppText style={Styles.productPrice}>${item.price.toFixed(2)}</AppText>
    </TouchableOpacity>
  )
}

export default ProductCard