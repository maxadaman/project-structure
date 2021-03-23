import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from 'store/config';
import Loading from 'components/Loading';
import AppContainer from './AppContainer';
import 'styles/index.scss';
import '@csstools/normalize.css';
import './index.scss';

const App: React.FC = () => (
  <Suspense fallback={<Loading timeout={350} />}>
    <div className={'app'}>
      <Provider store={store}>
        <BrowserRouter>
          <Route component={AppContainer} />
        </BrowserRouter>
      </Provider>
    </div>
  </Suspense>
);

export default App;
