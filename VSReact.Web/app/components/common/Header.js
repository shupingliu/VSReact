﻿import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
//import LoadingDots from './LoadingDots';

const Header = ({loading}) => {

    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home2</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
        </nav>
    );
};

//Header.propTypes = {
//    loading: PropTypes.bool.isRequired
//};

export default Header;
