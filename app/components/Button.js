import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
	constructor() {
		super();
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		const { onClick } = this.props;
		if (onClick) onClick();
	}

	render() {
		const { text } = this.props;
		return (
			<button type="button" onClick={this.clickHandler}>
				{text}
			</button>
		);
	}
}

Button.propTypes = {
	onClick: PropTypes.func,
	text: PropTypes.string
};

Button.defaultProps = {
	onClick: null,
	text: 'Button'
};

export default Button;
