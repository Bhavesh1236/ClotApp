import React from 'react'
import { View as DefaultView } from 'react-native';
import { ThemeProps, useThemeColor } from '../../hooks/useThemeColor';

type ViewProps = ThemeProps & DefaultView['props'];

const AppView = ( props: ViewProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}

export default AppView