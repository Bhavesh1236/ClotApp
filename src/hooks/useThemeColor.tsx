import React from 'react'
import Theme from '../context';
import { Appearance } from 'react-native';

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Theme.light & keyof typeof Theme.dark
) {
    
  const isDarkTheme = Appearance.getColorScheme() === 'light' ? 'light' : 'dark' ;
  const colorFromProps = props[isDarkTheme];

    if (colorFromProps) {  
      return colorFromProps;
    } else {    
      return Theme[isDarkTheme][colorName];
    }
}