import 'todomvc-app-css/index.css';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import App from './containers/App';

const store = configureStore();

render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NewApp = require('./containers/App').default;
        render(
      //<AppContainer
      //  component={require('./containers/App').default}
      //  props={{ store }}
      ///>,

            <AppContainer>
                <NewApp store={store}/>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}