/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/containers/App';
import store from './app/store';
import {Provider} from 'react-redux';

import {name as appName} from './app.json';


// Provider store={store} is using React context to pass the store to containers
const AppContainer = () => (
    <Provider store={store}>
        <App></App>
    </Provider>
);


AppRegistry.registerComponent(appName, () => AppContainer);
