import { View, Text, TouchableOpacity, ActivityIndicator, ViewStyle } from 'react-native'
import React from 'react'
import Styles from '../../assets/styles'
import AppText from './AppText'
import { Colors, Sizes } from '../../assets/styles/AppThems'

interface Props{
  title: string,
  onPress: Function,
  disabled?: boolean | false,
  style?: ViewStyle,
  textStyle?: object,
}
const AppButton: React.FC<Props> = ({ title, onPress, style, textStyle, disabled }) => {
  return (
    <View>
      <TouchableOpacity disabled={disabled} onPress={()=> onPress()} style={[style, {flexDirection:'row',justifyContent:'center',}]}>
        <AppText style={textStyle}>{title}</AppText>
        {disabled && <View style={{paddingLeft:Sizes.padding3}}><ActivityIndicator color={Colors.appColor} size={'small'}/></View>}
      </TouchableOpacity>      
    </View>
  )
}
  
export default AppButton