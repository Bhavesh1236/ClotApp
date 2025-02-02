import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Styles from '../assets/styles';
import { AppAlert, AppInput, AppText, AppView, BackButton } from '../components';

const ForgetPassword = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const insets = useSafeAreaInsets();

  const handleForgetPassword = async () => {
    try {
      if(email !== ''){
        navigation.navigate('Mail');
      }else{
        AppAlert.show("Error", "Please enter email", 3000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppView style={[Styles.Container, {paddingTop: insets.top}]}>
      <BackButton navigation={navigation} />

      <AppText style={[Styles.txt1, {paddingBottom: 50}]}>Forgot Password</AppText>
      
      <AppInput placeholder="Email Address" value={email} onChangeText={setEmail} />
              
      <TouchableOpacity style={Styles.button} onPress={handleForgetPassword}>
          <AppText style={Styles.buttonText}>Continue</AppText>
      </TouchableOpacity>      

    </AppView>
  )
}

export default ForgetPassword