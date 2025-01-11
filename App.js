// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './router/index'
import { Provider } from 'react-redux'
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>

  );
}