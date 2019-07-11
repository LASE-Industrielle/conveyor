import { NavigationActions, StackActions } from 'react-navigation';

const resetAction = path => {
  return StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: path })],
  });
};

export default resetAction;
