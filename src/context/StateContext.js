import React, { useContext, useReducer, createContext } from 'react';

const StateContext = createContext('');

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
    loading: false,
    errorMessage: ''
  }
};

export { StateContext, StateProvider, useStore, initialState };
