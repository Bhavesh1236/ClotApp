import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Styles from '../../assets/styles'
import AppText from '../shared/AppText'
import ProductCard from '../custom/ProductCard'

interface Props {
    title?: string,
    seeAll?: string,
    data?: any,
};

function SellingSection({title, seeAll, data }: Props): React.JSX.Element {
  return (
    <View style={Styles.section}>
        <View style={Styles.sectionHeader}>
            <AppText style={Styles.sectionTitle}>{title}</AppText>
            <TouchableOpacity>
                <AppText style={Styles.seeAll}>{seeAll}</AppText>
            </TouchableOpacity>
        </View>
        <FlatList
            horizontal
            data={data}
            renderItem={({item}) => <ProductCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default SellingSection