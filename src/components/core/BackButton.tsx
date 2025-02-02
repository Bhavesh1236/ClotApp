import { TouchableOpacity } from 'react-native'
import React from 'react'
import { AppIcons } from '..'
import { Colors, isDarkMode, Sizes } from '../../assets/styles/AppThems'

const BackButton = ({navigation}: {navigation: any}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{marginVertical: Sizes.padding1, backgroundColor: isDarkMode ? Colors.primary2 : Colors.lightGray, borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}}>
      <AppIcons name="chevron-left" size={24} color={isDarkMode ? Colors.white : Colors.black} type="Entypo" />
    </TouchableOpacity>
  )
}

export default BackButton