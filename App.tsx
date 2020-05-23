/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import configureStore from 'utils/store';
import { Store } from 'redux';
import { ApplicationState } from 'utils/root.reducer';
import { Provider } from 'react-redux';
import HomeScreen from 'screens/HomeScreen';

const App = () => {
  const [store, setStore] = useState<Store<ApplicationState> | undefined>();

  useEffect(() => {
    setStore(configureStore());
  }, []);

  return store ? (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  ) : null;
};

export default App;
