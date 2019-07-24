import React, { createContext, useContext, useReducer } from 'react';

const StateContext = createContext('');

// eslint-disable-next-line react/prop-types
const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

const useStore = () => useContext(StateContext);

const initialState = {
  auth: {
    token: '',
    errorMessage: '',
    loading: false
  },
  profile: {
    username: ''
  },
  conveyors: {
    data: [],
    errorMessage: '',
    loading: false
  },
  conveyor: {
    details: {
      material: {},
      customer: {},
      latest_measurement: {}
    },
    loading: true,
    errorMessage: ''
  }
};

export { StateContext, StateProvider, useStore, initialState };
