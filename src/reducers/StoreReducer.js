import authReducer from './AuthReducer';
import profileReducer from './ProfileReducer';
import conveyorsReducer from './ConveyorsReducer';
import conveyorReducer from './ConveyorReducer';
import notificationReducer from './NotificationReducer'

const storeReducer = ({ auth, profile, conveyors, conveyor, notifications }, action) => ({
  auth: authReducer(auth, action),
  profile: profileReducer(profile, action),
  conveyors: conveyorsReducer(conveyors, action),
  conveyor: conveyorReducer(conveyor, action),
  notifications: notificationReducer(notifications, action)
});

export default storeReducer;
