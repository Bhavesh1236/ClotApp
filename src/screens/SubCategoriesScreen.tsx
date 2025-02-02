import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Styles from '../assets/styles'
import { AppText, AppView, BackButton, ProductCard } from '../components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../interface'
import { topSelling } from '../constants'
import { Sizes } from '../assets/styles/AppThems'

const SubCategoriesScreen = () => {
	const insets = useSafeAreaInsets();
	const route = useRoute();
	const { category } = route.params as {category: string};
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <AppView style={[Styles.Container, {paddingTop: insets.top}]}>
			<BackButton navigation={navigation} />

			<FlatList
				data={topSelling}
				numColumns={2}
				columnWrapperStyle={{gap: Sizes.padding1}}
				renderItem={({item}: any) => <ProductCard item={item} />}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{rowGap: Sizes.large}}	
				extraData={topSelling}
				ListHeaderComponent={<AppText style={[Styles.txt1, {paddingBottom: Sizes.padding1}]}>{category} (240)</AppText>}
				keyExtractor={(item) => item.id.toString()}
			/>

    </AppView>
  )
}

export default SubCategoriesScreen