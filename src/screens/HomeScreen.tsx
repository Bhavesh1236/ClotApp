import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AppHeader, AppInput, AppText, AppView, SellingSection } from '../components';
import { categories, topSelling } from '../constants';
import Styles from '../assets/styles';
import { Colors, Sizes } from '../assets/styles/AppThems';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../interface';


const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  
  return (
    <AppView style={[styles.container]}>
      <AppHeader />
      <ScrollView  showsVerticalScrollIndicator={false}>          
        <View style={styles.header}>
          <AppInput isSearch={true} placeholder="Search" Style={styles.searchInput} onChangeText={() => {}} />
        </View>

        {/* Categories */}
        <View style={Styles.section}>
          <View style={Styles.sectionHeader}>
              <AppText style={Styles.sectionTitle}>Categories</AppText>
              <TouchableOpacity onPress={() => navigation.navigate('CategoriesScreen')}>
                <AppText style={Styles.seeAll}>See All</AppText>
              </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((category) => (
                <TouchableOpacity key={category.id} style={styles.categoryItem}>
                  <Image source={category.icon} style={styles.categoryIcon} />
                  <AppText style={styles.categoryName}>{category.name}</AppText>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>

        {/* Top Selling */}
        <SellingSection title='Top Selling' seeAll='See All' data={topSelling} />

        {/* New In Selling */}
        <SellingSection title='New In' seeAll='See All' data={topSelling} />

      </ScrollView>
    </AppView>      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 12,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 16,
  },

  categoryItem: {
    alignItems: 'center',
    marginRight: 24,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    marginBottom: Sizes.padding3,
  },
  categoryName: {
    fontSize: 12,
  },

  
});

export default HomeScreen; 