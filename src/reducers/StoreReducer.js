import authReducer from './AuthReducer';
import profileReducer from './ProfileReducer';
import conveyorsReducer from './ConveyorsReducer';
import conveyorReducer from './ConveyorReducer';

const storeReducer = ({ auth, profile, conveyors, conveyor }, action) => ({
  auth: authReducer(auth, action),
  profile: profileReducer(profile, action),
  conveyors: conveyorsReducer(conveyors, action),
  conveyor: conveyorReducer(conveyor, action)
});

export default storeReducer;
