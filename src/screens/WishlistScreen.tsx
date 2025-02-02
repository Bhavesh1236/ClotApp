import React from 'react';
import { AppText, AppView } from '../components';
import Styles from '../assets/styles';

const WishlistScreen = () => {
  return (
    <AppView style={[Styles.Container]}>
      <AppText style={{fontSize: 20, fontWeight: 'bold'}}>Wishlist Screen</AppText>
    </AppView>
  );

};

export default WishlistScreen; 