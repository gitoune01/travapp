import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Home from './src/screens/home';

const App = () => {
  return (
    <>
       <Home />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: 'orange',
  },
  safeView: {
    backgroundColor: 'red',
  },
  textCont: {
    // backgroundColor:'yellow',
    flex: 1,
  },
});
