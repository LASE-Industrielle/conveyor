import React from 'react';
import { StyleSheet } from 'react-native';

import AppContainer from './navigation/Navigation';
import { initialState, StateProvider } from './context/StateContext';
import storeReducer from './reducers/StoreReducer';

const style = StyleSheet.create({
  globalFont: {
    fontFamily: 'HelveticaNeue'
  }
});

const App = () => (
  <StateProvider initialState={initialState} reducer={storeReducer} style={style.globalFont}>
    <AppContainer />
  </StateProvider>
);

export default App;
