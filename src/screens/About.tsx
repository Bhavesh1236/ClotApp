import React, { useState } from 'react';
import { AppInput, AppText, AppView } from '../components';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import Styles from '../assets/styles';
import { Sizes } from '../assets/styles/AppThems';

const About = ({navigation}: any) => {
  const [selectedGender, setSelectedGender] = useState<'Men' | 'Women' | null>(null);
  const [age, setAge] = useState('');
  return (
    <AppView style={Styles.Container}>
      <AppText style={[styles.title,{paddingVertical: 50, marginTop:50}]}>Tell us About yourself</AppText>
      
      <View style={styles.section}>
        <AppText style={styles.label}>Who do you shop for ?</AppText>
        <View style={styles.genderContainer}>
          <TouchableOpacity style={[ styles.genderButton, selectedGender === 'Men' && styles.selectedGender, ]} onPress={() => setSelectedGender('Men')} >
            <AppText style={[ styles.genderText, selectedGender === 'Men' && styles.selectedGenderText ]}>Men</AppText>
          </TouchableOpacity>

          <TouchableOpacity style={[ styles.genderButton, selectedGender === 'Women' && styles.selectedGender, ]} onPress={() => setSelectedGender('Women')} >
            <Text style={[ styles.genderText, selectedGender === 'Women' && styles.selectedGenderText ]}>Women</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.section,{marginTop: 20}]}>
        <AppText style={styles.label}>How Old are you ?</AppText>
        <AppInput placeholder="Age Range" value={age} onChangeText={setAge} keyboardType='numeric' />
      </View>


      <TouchableOpacity style={styles.finishButton} onPress={() => navigation.reset({index: 0, routes: [{name: 'BottomTabs'}]})}>
        <AppText style={styles.finishButtonText}>Finish</AppText>
      </TouchableOpacity>
    </AppView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  section: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genderButton: {
    paddingVertical: 12,
    borderRadius: 50,
    width: '48%',
    backgroundColor: '#F5F5F5',
  },
  selectedGender: {
    backgroundColor: '#7C3AED',
  },
  genderText: {
    color: '#666',
    fontSize: Sizes.f3,
    textAlign: 'center',
  },
  selectedGenderText: {
    color: 'white',
  },
  ageButton: {
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  ageButtonText: {
    color: '#666',
  },
  finishButton: {
    backgroundColor: '#7C3AED',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
  },
  finishButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default About;