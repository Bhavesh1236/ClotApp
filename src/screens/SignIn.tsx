import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StatusBar, } from 'react-native';
import { useAuth } from '../services/auth/AuthContext';
import { Colors, Sizes } from '../assets/styles/AppThems';
import { AppAlert, AppInput, AppText, AppView } from '../components';
import images from '../assets/images';
import Styles from '../assets/styles';

const SignIn = ({ navigation, route }: any) => {
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const { email } = route.params;

  const handleLogin = async () => {
    try {
      signIn(email, password).then((res: any) => {
        console.log('res handleLogin:',res);
        navigation.reset({index: 0, routes: [{name: 'BottomTabs'}]})
      }).catch((error: any) => {
        console.error(error);
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AppView style={[Styles.Container]}>

        <AppText style={[Styles.txt1, {paddingVertical: 50}]}>Sign in</AppText>
        
        <AppInput placeholder="Password" value={password} onChangeText={setPassword} password />
                
        <TouchableOpacity style={Styles.button} onPress={handleLogin}>
            <AppText style={Styles.buttonText}>Continue</AppText>
        </TouchableOpacity>
       
        <TouchableOpacity style={{marginVertical: Sizes.padding3, marginBottom: 80, flexDirection:'row'}} onPress={() => navigation.navigate('ForgetPassword')}>
            <AppText style={Styles.linkText}>Forgot Password ?</AppText>
            <AppText style={[Styles.linkText,{fontWeight:'bold'}]}> Reset</AppText>
        </TouchableOpacity>

    </AppView>
  )
}

export default SignIn