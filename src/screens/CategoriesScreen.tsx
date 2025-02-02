import React from 'react'
import { Colors, Sizes } from '../assets/styles/AppThems'
import { AppIcons, AppText, AppView, BackButton } from '../components'
import Styles from '../assets/styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { categories } from '../constants'
import { FlatList, Image, TouchableOpacity } from 'react-native'
import { RootStackParamList } from '../interface'
import { StackNavigationProp } from '@react-navigation/stack'

const CategoriesScreen = () => {
	const insets = useSafeAreaInsets();
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <AppView style={[Styles.Container, {paddingTop: insets.top}]}>
			<BackButton navigation={navigation} />
			<AppText style={[Styles.txt1, {paddingBottom: 30}]}>Shop by Categories</AppText>        

			<FlatList
				data={categories}
				renderItem={({item}: any) => (
					<TouchableOpacity key={item.id} style={Styles.btn} onPress={() => navigation.navigate('SubCategoriesScreen', {category: item.name})} >
						<Image source={item.icon} style={{width: 45, height: 45, borderRadius: 10}} resizeMode='contain'/>
						<AppText style={{fontSize: Sizes.f3, fontWeight:'600'}}>{item.name}</AppText>
					</TouchableOpacity>
				)}
			/>

    </AppView>
  )
}

export default CategoriesScreen