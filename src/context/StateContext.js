import React, {useContext, useReducer, createContext} from 'react';

export const StateContext = createContext('');

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

export const initialState = {
    auth: {
        token: '',
        errorMessage: '',
        loading: false,
    },
    profile: {
        username: '',
    },
    conveyors: {
        data: [],
        errorMessage: '',
        loading: false,
    }
};