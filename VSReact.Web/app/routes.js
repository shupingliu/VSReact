import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import Header from './components/common/Header';
//import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

const routes = () => {
    return (
        <div>
            <Route component={Header} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/courses" component={CoursesPage} />
            <Route exact path="/about" component={AboutPage} />
        </div>
    );

    //return (
    //    <Route exact path="/" component={App}>
    //        <Route component={HomePage} />
    //        <Route path="courses" component={CoursesPage} />
    //        <Route path="about" component={AboutPage} />
    //    </Route>
    //);
};

export default routes;
