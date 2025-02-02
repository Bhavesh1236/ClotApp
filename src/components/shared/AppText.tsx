import React from 'react'
import { Text as DefaultText } from 'react-native';
import { ThemeProps, useThemeColor } from '../../hooks/useThemeColor';

type TextProps = ThemeProps & DefaultText['props'];

const AppText = (props: TextProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    return <DefaultText style={[{ fontFamily:'Roboto-Medium', color }, style]} {...otherProps} />;
}

export default AppText