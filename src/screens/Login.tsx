import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StatusBar, } from 'react-native';
import { useAuth } from '../services/auth/AuthContext';
import { Colors, isDarkMode, Sizes } from '../assets/styles/AppThems';
import { AppAlert, AppInput, AppText, AppView } from '../components';
import images from '../assets/images';
import Styles from '../assets/styles';

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const { googleSignIn } = useAuth();

  const handleLogin = async () => {
    try {
      if(email !== '' ){
        navigation.navigate('SignIn', {email});
      }else{
        AppAlert.show("Error", "Please enter email", 3000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn().then((res: any) => {
        console.log('res handleGoogleSignIn:',res);
        if(res !== undefined)
          navigation.reset({index: 0, routes: [{name: 'BottomTabs'}]})
        else
          AppAlert.show('Select Email',"Please Select Email", 3000);
      }).catch((error: any) => {
        console.error(error);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppView style={[Styles.Container]}>
        <StatusBar barStyle="light-content" backgroundColor={isDarkMode ? Colors.appColor2 : Colors.lightGray} />

        <AppText style={[Styles.txt1, {paddingVertical: 50}]}>Sign in</AppText>
        
        <AppInput placeholder="Email Address" value={email} onChangeText={setEmail} />
                
        <TouchableOpacity style={Styles.button} onPress={handleLogin}>
            <AppText style={Styles.buttonText}>Continue</AppText>
        </TouchableOpacity>
       

        <TouchableOpacity style={{marginVertical: Sizes.padding3, marginBottom: 80}} onPress={() => navigation.navigate('SignUp')}>
            <AppText style={Styles.linkText}>Don't have an account? Create one</AppText>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.googleButton} onPress={() => AppAlert.show("Comming soon", "This feature is coming soon", 3000)}>
            <View style={{position: 'absolute', left: Sizes.medium}}>
                <Image source={images.apple} style={Styles.googleIcon} />
            </View>
            <AppText style={Styles.googleButtonText}>Continue with Apple</AppText>
        </TouchableOpacity>


        <TouchableOpacity style={Styles.googleButton} onPress={handleGoogleSignIn}>
            <View style={{position: 'absolute', left: Sizes.medium}}>
                <Image source={images.google} style={Styles.googleIcon} />
            </View>
            <AppText style={Styles.googleButtonText}>Continue with Google</AppText>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.googleButton} onPress={() => AppAlert.show("Comming soon", "This feature is coming soon", 3000)}>
            <View style={{position: 'absolute', left: Sizes.medium}}>
                <Image source={images.facebook} style={Styles.googleIcon} />
            </View>

            <AppText style={Styles.googleButtonText}>Continue with Facebook</AppText>
        </TouchableOpacity>
    </AppView>
  );
};


export default Login;