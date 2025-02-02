import React, { PropsWithChildren } from 'react'
import { View, Modal, TouchableOpacity, ViewStyle } from 'react-native'
import { Colors, Sizes } from '../../assets/styles/AppThems';
import AppText from './AppText';

type SectionProps = PropsWithChildren<{
    visible: boolean,
    setIsVisible: Function,
    height?: any | '50%',
    title?: string,
    style?: ViewStyle,
    leftTitle?: string,
    rightTitle?: string,
    leftPress?: Function | any,
    rightPress?: Function | any ,
}>;

function AppModal({children, visible, style ,setIsVisible, leftTitle ,leftPress, rightTitle, rightPress, height, title}: SectionProps): React.JSX.Element {
  let isHeight = Boolean(height);
  return (
    <Modal visible={visible} animationType='slide'  transparent={true} onRequestClose={()=>setIsVisible()} >
        <TouchableOpacity style={{flex:1,backgroundColor:'#0000008a', overflow:'hidden',}} onPress={() => setIsVisible()} />
        <View style={[{backgroundColor:'#20313b',maxHeight:'90%' ,position:'absolute', zIndex:10, bottom: 0, borderRadius: 10, width:'100%',paddingVertical:Sizes.padding2, paddingBottom:Sizes.padding1 },style ,isHeight && {height: height}]}>
          <View style={{flexDirection:'row', justifyContent: Boolean(leftTitle && rightTitle) ? 'space-between' : 'center', alignItems:'center', paddingBottom:Sizes.padding3, paddingHorizontal:Sizes.padding1}}>
            {Boolean(rightTitle) && <TouchableOpacity onPress={()=> leftPress ? leftPress() : setIsVisible()}>
              <AppText style={{color:Colors.green, fontSize: Sizes.f3}}>{leftTitle}</AppText>
            </TouchableOpacity>}
            {Boolean(title) ?<AppText style={{fontSize: Sizes.f3}}>{title}</AppText> : <View style={{width:160, height:2.3, borderRadius:10, backgroundColor:Colors.white, }} />}
            {Boolean(rightTitle) &&<TouchableOpacity onPress={()=>rightPress ? rightPress() : setIsVisible()}>
              <AppText style={{color:Colors.green, fontSize: Sizes.f3}}>{rightTitle}</AppText>
            </TouchableOpacity>}
          </View>
          {children}
        </View>            
    </Modal>
  );
}

export default AppModal