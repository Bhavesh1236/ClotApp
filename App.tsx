import React from 'react';
import { AuthProvider } from './src/services/auth/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { Login, SignIn, SignUp, Onboarding, ForgetPassword, Mail, About, CategoriesScreen, SubCategoriesScreen } from './src/screens';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './src/routes/BottomTabs';
import { LogBox } from 'react-native';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  LogBox.ignoreAllLogs();
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="Mail" component={Mail} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
          <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
          <Stack.Screen name="SubCategoriesScreen" component={SubCategoriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
