import React, { useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import { Image, StatusBar } from 'react-native'

import images from '../assets/images'
import Styles from '../assets/styles'
import { AppView } from '../components'
import { Colors, isDarkMode } from '../assets/styles/AppThems'

const Onboarding = ({navigation}:any) => {
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setTimeout(() => {
        const route = user ? 'BottomTabs' : 'Login'
        navigation.reset({ index: 0, routes: [{ name: route}] });
      }, 2000);
    });

    return () => unsubscribe()
  }, [])

  return (
    <AppView style={Styles.AppContainer}>
      <StatusBar barStyle="light-content" backgroundColor={isDarkMode ? Colors.appColor2 : Colors.lightGray} />
      <Image source={images.icon} style={Styles.icon} resizeMode='contain' />
    </AppView>
  );
}

export default Onboarding