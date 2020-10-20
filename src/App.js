import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '~/config/ReactotronConfig';

import Routes from '~/routes';
import history from '~/services/history';

import AppProvider from '~/hooks/AppProvider';

import GlobalStyles from '~/styles/global';

import { store, persistor } from '~/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppProvider>
          <Router history={history}>
            <GlobalStyles />
            <Routes />
          </Router>
        </AppProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
