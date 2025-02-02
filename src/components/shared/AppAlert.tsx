import React from 'react'
import { Alert,Platform, ToastAndroid } from 'react-native'

const ISIOS = Platform.OS === 'ios' ?  true : false;

const AppAlert = {

    /**
    * This is display message from alert box.
    * @param title displa to title on alert message.
    * @param message display message description.
    * @param Duration it's android devices only pass params to set android toast messgae delay.
    * For example:
    * AppAlert.show("show msg title","display message description");
    */
    show : (title = "Everbreed", message: string, Duration = ToastAndroid.SHORT) => {
        ISIOS ? Alert.alert(title, message) : ToastAndroid.show(message, Duration);
    },
    
    /**
     * This is custom pop display message from alert box.
     * @param title displa to title on alert message.
     * @param message display message description.
     * For example:
     * AppAlert.showCustom("show msg title","display message description");
     */
    showCustom : (title = "Everbreed", message: string) => {
        Alert.alert(title, message);
    },
    
    /**
     * This is custom button press pop display message from alert box.
     * @param title displa to title on alert message.
     * @param message display message description.
     * @param buttonTitle display button name text.
     * @param button call a function on button click.
     * For example:
     * AppAlert.showButton("show msg title","display message description","save",showAllow);
     */
    showButton : (title: string, message: string, buttonTitle: string, button: any) => {
        Alert.alert(title, message,[{ text: buttonTitle, onPress: button}],{cancelable: false});
    },
}

export default AppAlert;