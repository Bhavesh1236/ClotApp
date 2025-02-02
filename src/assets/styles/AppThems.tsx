import { Dimensions, useColorScheme } from "react-native";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const isDarkMode = useColorScheme() === 'dark';

const Colors = {
    appColor: '#8E6CEF',
    appColor2: '#1D182A',
    darkblue: '#445988',
    primary:'#7B61FF',
    primary2: '#342F3F',
    drak:'#000',
    white:'#fff',
    lightDirk: '#2f2f2f',
    gray: '#8E8E93', 
    gray2: '#757575',
    gray3: '#757575',
    red: 'red',
    peach: '#FF615F',
    red2: "#FF4134", 
    red3: "#F0635A", 
    green:'#00a76f',
    orange: '#F59762',
    info: '#46CDFB',
    success: '#66D59A',
    error: '#F0636A',
    lightGray: '#F2F2F7',
    lightWhite: '#F8F9FA',
    lightWhite2: '#F4F4F4',
    black: '#000000',
    appBule:'#5669FF',
    appBule2:'#3D56F0',
    appBule3:'#4A43EC',
    appBule4:'#5D56F3',
    cyan: '#46CDFB',
};

const Sizes = {
    base:8,
    padding1: 20,
    padding2: 15,
    padding3: 10,
    radius: 12,
    border: 1,
    
    f1: 30,
    f2: 25,
    f3: 19,
    f4: 17,
    f5: 15,
    f6: 16,

    large: 30,
    medium: 25,

    Width,
    Height
}

export { Colors, Sizes, isDarkMode};
