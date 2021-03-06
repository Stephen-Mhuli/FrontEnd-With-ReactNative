//import { StatusBar } from "expo-status-bar";
import React, {useEffect} from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {View, Text } from "react-native";
import { NativeBaseProvider } from 'native-base';
import Toast from "react-native-toast-message";
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';


// Redux
import { Provider } from "react-redux";
import store from "./Redux/store";

// Context API
import Auth from "./Context/store/Auth";

//Ignore logs
LogBox.ignoreLogs(['Remote debugger']);

// Navigatiors
import Main from "./Navigators/Main";

// Screens
import Header from "./Shared/Header";

LogBox.ignoreAllLogs(true);

//Toast message customization

const toastConfig = {
  'success': (internalState) => (
      <Text style={{  fontFamily: "nunito_italic"}}>{internalState.text1}</Text>
  ),
  'error': (internalState) => (
      <Text style={{  fontFamily: "nunito_italic"}}>{internalState.text1}</Text>
  ),
  'info': () => {},

}



export default function App() {

  useEffect(() => {
    (async () => await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    }))();
   }, [])

  //fonts
  const [fontsLoaded] = useFonts({
    nunito_bold: require('./assets/fonts/Nunito-Bold.ttf'),
    nunito_semi_bold: require('./assets/fonts/Nunito-SemiBold.ttf'),
    nunito_italic: require('./assets/fonts/Nunito-Italic.ttf'),
    nunito_regular: require('./assets/fonts/Nunito-Regular.ttf'),

  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <Header />
          <Main />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </Auth>
  );
}
