import {authReducer} from './AuthReducer';
import {profileReducer} from './ProfileReducer';
import {conveyorsReducer} from "./ConveyorsReducer";

export const mainReducer = ({ auth, profile, conveyors }, action) => ({
    auth: authReducer(auth, action),
    profile: profileReducer(profile, action),
    conveyors: conveyorsReducer(conveyors,action),
});