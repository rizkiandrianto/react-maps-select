import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCount } from 'redux/actions/MainAction';

class Button extends Component {
    constructor() {
        super();
        this.addCount = this.addCount.bind(this);
    }
    addCount() {
        this.props.setCount();
    }
    render() {
        return <button onClick={this.addCount}>Add Count {this.props.count}</button>;
    }
}

Button.propTypes = {
    setCount: PropTypes.func.isRequired,
    count: PropTypes.number
};

Button.defaultProps = {
    count: 0
};

export default connect(
state => ({
    count: state.MainReducer.count
}),
dispatchEvent => bindActionCreators({
    setCount
}, dispatchEvent)
)(Button);
