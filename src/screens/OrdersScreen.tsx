import React from 'react';
import { AppText, AppView } from '../components';
import Styles from '../assets/styles';

const OrdersScreen = () => {
  return (
    <AppView style={[Styles.Container]}>
      <AppText style={{fontSize: 20, fontWeight: 'bold'}}>Orders Screen</AppText>
    </AppView>
  );
};


export default OrdersScreen; 