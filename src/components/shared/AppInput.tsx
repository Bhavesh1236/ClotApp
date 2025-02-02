import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet, Platform, ViewStyle } from 'react-native'
import { Colors, isDarkMode, Sizes } from '../../assets/styles/AppThems'
import AppText from './AppText'
import AppIcons from './AppIcons'

interface Props {
  placeholder: string,
  onChangeText: Function,
  password ?: boolean,
  multiline ?: boolean | false,
  isSearch ?: boolean,
  Style?: ViewStyle,
  error?: string,
  value?: string,
  isWidth?: any,
  keyboardType?: 'default' | 'email-address' | 'phone-pad' | 'numeric' | 'url'
}

const AppInput: React.FC<Props> = ({ placeholder, onChangeText, password,Style, isWidth, isSearch, error, value, keyboardType, multiline }) => {
  const [isPassword, setisPassword] = useState(Boolean(password));


  return (
    <View style={{width:isWidth ? isWidth :'100%'}}>
      <View style={[{ backgroundColor: isDarkMode ? Colors.primary2 : Colors.lightGray,borderWidth: 1, borderColor: error ? Colors.red2 : Colors.gray, borderRadius: isSearch ? 30 : Sizes.radius, flexDirection: 'row',alignItems:'center', justifyContent:'space-between', paddingHorizontal: Sizes.padding3,marginVertical:Sizes.padding3}, Style]}>
        {isSearch && <View style={{paddingHorizontal:Sizes.padding3}}><AppIcons type='Feather' name='search' size={20} color={Colors.gray} /></View>}

        <TextInput
          placeholder={placeholder || 'Enter value'}
          placeholderTextColor={error ? Colors.red2 : Colors.gray}
          style={[{color: isDarkMode ? Colors.lightWhite : Colors.black,fontSize: Sizes.f4, flex:1, marginVertical: Platform.OS === 'android' ? 6 : 10}, multiline && {height:100}]}
          secureTextEntry={isPassword}
          textAlignVertical='top'
          keyboardType={keyboardType}
          value={value}
          multiline={multiline}
          onChangeText={(text)=>onChangeText(text)}
        />
        {password && <TouchableOpacity onPress={()=> setisPassword(!isPassword)}>
          <AppIcons color={error ? Colors.red2 : Colors.gray} name={isPassword ? 'eye' : 'eye-with-line'} size={23} type='Entypo' />
        </TouchableOpacity>}
      </View>
      {error && <AppText style={{paddingLeft: Sizes.base, color: Colors.red2, fontSize: Sizes.f5}} >{error}</AppText>}
    </View>
  )
}

export default AppInput