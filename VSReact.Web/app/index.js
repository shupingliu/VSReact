/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
//import configureStore from './store/configureStore';
//import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import Root from './Root';
import routes from './routes';
import { AppContainer } from 'react-hot-loader';
//import { loadCourses } from './actions/courseActions';
//import { loadAuthors } from './actions/authorActions';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/toastr/build/toastr.min.css';

//const store = configureStore();
//store.dispatch(loadCourses());
//store.dispatch(loadAuthors());

//render(
//    <Provider store={store}>
//        <Router history={browserHistory} routes={routes} />
//    </Provider>,
//    document.getElementById('app')
//);
const renderApp = (appRoutes) => {
    ReactDOM.render(
        //<Router history={browserHistory} routes={routes} />,
        <AppContainer>
            <Root routes={appRoutes} />
        </AppContainer>,
        document.getElementById('app')
    );
}

// Render the client-side DOM
renderApp(routes);

if (module.hot) {
    module.hot.accept('./routes', () => {
        const newRoutes = require('./routes').default;
        renderApp(newRoutes);
    });
}