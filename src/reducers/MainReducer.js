import {authReducer} from './AuthReducer';
import {profileReducer} from './ProfileReducer';

export const mainReducer = ({ auth, profile }, action) => ({
    auth: authReducer(auth, action),
    profile: profileReducer(profile, action),
});