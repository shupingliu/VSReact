import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
//import LoadingDots from './LoadingDots';

const Header = () => {

    return (
        <nav>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            {" | "}
            <NavLink to="/courses" activeClassName="active">Courses</NavLink>
            {" | "}
            <NavLink to="/about" activeClassName="active">About</NavLink>
        </nav>
    );
};

//Header.propTypes = {
//    loading: PropTypes.bool.isRequired
//};

export default Header;
