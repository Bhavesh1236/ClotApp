import React from 'react';
import { AppText, AppView } from '../components';
import Styles from '../assets/styles';

const ProfileScreen = () => {
  return (
    <AppView style={Styles.Container}>
      <AppText style={{fontSize: 20, fontWeight: 'bold'}}>Profile Screen</AppText>
    </AppView>
  );
};


export default ProfileScreen; 