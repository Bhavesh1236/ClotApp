import React from 'react'
import { View } from 'react-native'
import {AppText, AppView, } from '../index'
import Styles from '../../assets/styles'
import { Colors, Sizes } from '../../assets/styles/AppThems';

interface Props{
  prcentage: number,
  title: string,
  price: string,
  color: string,
  tintColor: string,
}

const AppProgress: React.FC<Props> = ({ prcentage, price, title, color, tintColor}) => {
 
  return (
    <AppView style={Styles.card2}>
      <View style={{flexDirection:'row', justifyContent:'space-between', paddingBottom:Sizes.padding2}}>
        <AppText style={{fontSize:Sizes.f5}}>{title}</AppText>
        <View style={{flexDirection:'row', paddingRight:Sizes.padding1}}>
          <AppText style={{fontSize:Sizes.f5}}>{parseFloat(price).toFixed(2)}</AppText>
          <AppText style={{color:Colors.gray, paddingLeft: Sizes.padding3, fontSize:Sizes.f5}}>{`(${prcentage}%)`}</AppText>
        </View>        
      </View>
      <View style={{backgroundColor:tintColor, height:5,flex:1, marginRight:Sizes.padding1}}>
        <View style={{backgroundColor: color,height:5, width:`${prcentage}%`, overflow:'hidden', zIndex:10}} />
      </View>
    </AppView>
  )
}

export default AppProgress