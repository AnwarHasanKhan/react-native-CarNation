import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

// Standard navigation
export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

//For goback()
export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  } else {
    console.warn('No screen to go back to');
  }
}

//For Replace()
export function replace(name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}
