import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import AppContainer from './Navigation';
import { StateProvider, initialState, useStateValue } from './context/StateContext';
import { mainReducer } from './reducers/MainReducer';
import { StatusBar, Platform } from 'react-native';

const App = () => {

  

  return (
    <StateProvider initialState={initialState} reducer={mainReducer}>
      {Platform.OS === 'ios' ? <StatusBar barStyle="light-content" translucent={true} /> : null}
      <AppContainer />
    </StateProvider>
  );
};

export default App;
