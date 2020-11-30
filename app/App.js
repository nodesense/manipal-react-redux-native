import 'react-native-gesture-handler'

 
import React, { useState, useCallback } from 'react';
 
import { SafeAreaView, 
   Button, Text, StyleSheet, StatusBar, View } from "react-native";

import Shell from './containers/Shell';
import Login from './containers/Login';
import ThemeContext from './contexts/ThemeContext';

import LanguageContext, {english, arabic} from './contexts/LanguageContext';

 
// explicity provide color theme from app component

const languages = {
  "english": english,
  "arabic": arabic
}

const App = ( {authenticated} ) => {
  const [lang, setLang] = useState("english")
  const styleTypes = ['default','dark-content', 'light-content'];
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);
  const changeVisibilityStatusBar = () => {
    setVisibleStatusBar(!visibleStatusBar);
  };

  const changeStyleStatusBar = () => {
    const styleId = styleTypes.indexOf(styleStatusBar) + 1;

    if(styleId === styleTypes.length){
      return setStyleStatusBar(styleTypes[0]);
    }
    return setStyleStatusBar(styleTypes[styleId]);
  };
  
  const memoizedSetLangCallback = useCallback(
    (value) => {
      console.log("memozied called ", value)
       setLang(value)
    },
    [lang], // whenever lang got change, the new function will be created
  );

  return (
    <>
     <StatusBar backgroundColor="blue" barStyle={styleStatusBar} />
          <ThemeContext.Provider value="orange">
          <LanguageContext.Provider value= { languages[lang] }>
            <SafeAreaView style={styles.container}>
          {authenticated ? <Shell memoizedSetLangCallback={memoizedSetLangCallback} /> : <Login />}
          </SafeAreaView>
          </LanguageContext.Provider>  
          </ThemeContext.Provider>   
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;