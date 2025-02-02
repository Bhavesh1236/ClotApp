import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

interface props {
    name : string,
    color : string,
    size : number,
    type : "Entypo"| "Ionicons" | "AntDesign"| "EvilIcons"| "Feather"| "FontAwesome"| "Fontisto"| "Foundation"| "SimpleLineIcons"| "MaterialCommunityIcons" | "MaterialIcons" | "Octicons" | "Zocial",
}

const component = { Entypo, Ionicons, AntDesign, EvilIcons, Feather, FontAwesome, Fontisto, Foundation, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial }

const AppIcons : React.FC<props> = ({ type, name, color, size}) => {
    const IconComponents = component[type];
    return <IconComponents name={name} color={color} size={size} />
}

export default AppIcons;