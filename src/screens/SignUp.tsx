import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Styles from '../assets/styles';
import {  Sizes } from '../assets/styles/AppThems';
import { useAuth } from '../services/auth/AuthContext';
import { AppAlert, AppInput, AppText, AppView, BackButton } from '../components';

const SignUp = ({navigation}: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const insets = useSafeAreaInsets();
    const { signUp } = useAuth();

    const handleForgetPassword = async () => {
      try {
        if(email !== '' && password !== '' && firstname !== '' && lastname !== ''){
          signUp(email, password).then(() => {
            navigation.navigate('About');
          }).catch((error: any) => {
            AppAlert.show("Error", "Failed to sign up", 3000);
          });
        }else{
          AppAlert.show("Error", "Please enter all fields", 3000);
        }

      } catch (error) {
        console.error(error);
      }
    };

  return (
    <AppView style={[Styles.Container, {paddingTop: insets.top}]}>
      <BackButton navigation={navigation} />

      <AppText style={[Styles.txt1, {paddingBottom: 50}]}>Create Account</AppText>
      
      <AppInput placeholder="Firstname" value={firstname} onChangeText={setFirstname} />
      <AppInput placeholder="Lastname" value={lastname} onChangeText={setLastname} />
      <AppInput placeholder="Email Address" value={email} onChangeText={setEmail} />
      <AppInput placeholder="Password" value={password} onChangeText={setPassword} password />
              
      <TouchableOpacity style={[Styles.button,{marginVertical: Sizes.large}]} onPress={handleForgetPassword}>
          <AppText style={Styles.buttonText}>Continue</AppText>
      </TouchableOpacity>

        <TouchableOpacity style={{marginVertical: Sizes.padding3, marginBottom: 80, flexDirection:'row'}} onPress={() => navigation.navigate('ForgetPassword')}>
            <AppText style={Styles.linkText}>Forgot Password ?</AppText>
            <AppText style={[Styles.linkText,{fontWeight:'bold'}]}> Reset</AppText>
        </TouchableOpacity>  

    </AppView>
  )
}

export default SignUp