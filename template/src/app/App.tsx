import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Loading from 'components/Loading';
import '@csstools/normalize.css';
import store from 'store/config';
import AppContainer from './AppContainer';
import 'styles/index.scss';
import './index.scss';

const App = () => (
  <Suspense fallback={<Loading timeout={350} />}>
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Route component={AppContainer} />
        </BrowserRouter>
      </Provider>
    </div>
  </Suspense>
);

export default App;
