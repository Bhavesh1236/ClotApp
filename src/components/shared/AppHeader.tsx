import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import images from '../../assets/images';
import { AppIcons, AppModal, AppText, AppView } from '../index';
import { Colors, isDarkMode, Sizes } from '../../assets/styles/AppThems';
import Styles from '../../assets/styles';
import { useAuth } from '../../services/auth/AuthContext';
import { useNavigation } from '@react-navigation/native';

interface Props {
    title?: string,
};

function AppHeader({ title, }: Props): React.JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { signOut, deleteAccount } = useAuth();
    const navigation = useNavigation<any>(); 


    function handleSignOut(){
        signOut().then(() => {
            setIsMenuOpen(false);
            navigation.reset({index: 0, routes: [{name: 'Login'}]});
        });
    }

    function handleDeleteAccount(){
        deleteAccount().then(() => {
            setIsMenuOpen(false);
            navigation.reset({index: 0, routes: [{name: 'Login'}]});
        });
    }

    return (
        <AppView style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginTop: Sizes.padding3, paddingHorizontal: Sizes.padding1}}>
            <TouchableOpacity onPress={() => setIsMenuOpen(!isMenuOpen)}>
                <Image source={images.menu} style={{width:50, height:50, borderRadius: 30}} resizeMode='contain'/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', backgroundColor: isDarkMode ? Colors.primary2 : Colors.lightGray, paddingHorizontal: Sizes.padding1, paddingVertical: Sizes.padding2,gap: Sizes.padding3,borderRadius: 50}}>
                <AppText style={{fontSize: Sizes.f5, fontWeight:'600'}}>Menu</AppText>
                <AppIcons name='down' type='AntDesign' size={18} color={isDarkMode ? Colors.white : Colors.black}/>
            </TouchableOpacity>
            <TouchableOpacity style={{padding: Sizes.padding2, backgroundColor:Colors.appColor, borderRadius: 30}}>
                <AppIcons name='shopping-bag' type='Feather' size={24} color={Colors.white}/>
            </TouchableOpacity>
            <AppModal visible={isMenuOpen} setIsVisible={() => setIsMenuOpen(!isMenuOpen)} >
                <View style={{padding: Sizes.padding2, paddingBottom: Sizes.large}}>
                    <AppText style={{fontSize: Sizes.f2, fontWeight:'600', textAlign:'center', color:Colors.lightGray, paddingBottom: Sizes.large}}>Menu</AppText>
                    <TouchableOpacity style={Styles.btn2} onPress={handleSignOut}>
                        <AppIcons name='log-out' type='Entypo' size={24} color={Colors.red2}/>
                        <AppText style={{fontSize: Sizes.f4, fontWeight:'600', color:Colors.red3}}>LOGOUT</AppText>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.btn3} onPress={handleDeleteAccount}>
                        <AppIcons name='delete' type='AntDesign' size={24} color={Colors.red2}/>
                        <AppText style={{fontSize: Sizes.f4, fontWeight:'600', color:Colors.red3}}>Delete Account</AppText>
                    </TouchableOpacity>
                </View>
            </AppModal>
        </AppView>
    )
}

export default AppHeader;