import React from "react";

import AppContainer from "./Navigation";
import { StateProvider, initialState } from "./context/StateContext";
import { mainReducer } from "./reducers/MainReducer";

const App = () => (
  <StateProvider initialState={initialState} reducer={mainReducer}>
    <AppContainer />
  </StateProvider>
);

export default App;
