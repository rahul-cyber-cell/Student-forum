import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import AppProvider from './components/AppProvider/AppProvider';
import Home from './pages';
import Payments from './pages/Payments';
import AuthRoute from './utils/AuthRoute';
import { Provider } from 'react-redux';
import { store, persistor } from './store/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import Login from './pages/Login';
import NewRecord from './pages/Payments/NewRecord';
import FeeStructure from './pages/Payments/FeeStructure';

ReactDOM.render(
  <AppProvider>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
          <Switch>
          <Route exact path="/login" component={Login} />
          <AuthRoute exact path="/" component={Home} />
          <AuthRoute exact path="/dashboard" component={Home} />
          <Route path="/newRecord" render={() => 
            <Fragment>
              <NewRecord />
            </Fragment>
          } />
          <AuthRoute exact path="/feeStructure" component={FeeStructure} />
          </Switch>
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </AppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
