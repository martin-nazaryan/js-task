import React from "react";
import {Provider} from 'react-redux';
import store from './store';

import AppLayout from "./components/Layout";

import './App.scss';

const App = () => (
  <Provider store={store}>
    <AppLayout/>
  </Provider>
)

export default App;
