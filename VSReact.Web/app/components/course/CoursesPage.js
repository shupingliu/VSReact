import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
//import {browserHistory} from 'react-router';


class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    // normally keep the mark-up to a seperate file
    render() {
        const {courses} = this.props;   // destructure
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses}/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

