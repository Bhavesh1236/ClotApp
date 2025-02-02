import React from 'react'
import { AppText, AppView } from '../components'
import Styles from '../assets/styles'
import { Image, TouchableOpacity } from 'react-native'
import images from '../assets/images'
import { Sizes } from '../assets/styles/AppThems'

const Mail = ({navigation}: any) => {

  return (
    <AppView style={[Styles.Container, Styles.Center, {alignItems: 'center'}]}>

        <Image source={images.message} style={{width: 100, height: 100, alignSelf: 'center'}} resizeMode='contain' />
        <AppText style={[Styles.txt1, {paddingVertical: Sizes.padding1, textAlign: 'center'}]}>We Sent you an Email to reset your password.</AppText>        
                
        <TouchableOpacity style={[Styles.button,{paddingHorizontal: Sizes.medium}]} onPress={() => navigation.reset({index: 0, routes: [{name: 'Login'}]})}>
          <AppText style={Styles.buttonText}>Return to Login</AppText>
        </TouchableOpacity>      

    </AppView>
  )
}

export default Mail