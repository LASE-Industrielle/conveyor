import { NavigationActions, StackActions } from 'react-navigation';
import { LoginPath } from '../navigation/Paths';

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: LoginPath })]
});

export default resetAction;
