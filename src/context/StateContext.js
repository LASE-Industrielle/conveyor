// @flow
import React, { createContext, useContext, useReducer } from 'react';

const StateContext = createContext('');

type Props = {
  reducer: Function,
  initialState: Object,
  children: React.Node
};

const StateProvider = ({ reducer, initialState, children }: Props) => (
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
