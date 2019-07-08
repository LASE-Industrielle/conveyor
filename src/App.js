import React from 'react';

import AppContainer from './Navigation';
import { StateProvider, initialState } from './context/StateContext';
import storeReducer from './reducers/StoreReducer';

const App = () => (
  <StateProvider initialState={initialState} reducer={storeReducer}>
    <AppContainer />
  </StateProvider>
);

export default App;
