import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Head from 'components/head';
import Button from 'components/Button';

import { setCount } from 'redux/actions/MainAction';

class Contoh extends Component {
	clickHandler = this.clickHandler.bind(this)

	clickHandler() {
		const { setCount: setCount_ } = this.props;

		setCount_();
	}

	render() {
		const { count } = this.props;
		return (
			<div>
				<Head title="==== CONTOH ===" description="Ini adalah halaman Contoh" />
				<div className="hero">
					<p>Halaman Contoh</p>
					<p>{count}</p>
				</div>
				<Button onClick={this.clickHandler} text={`Add Count ${count}`} />
				<Link href="/"><a>Home</a></Link>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
	setCount
}, dispatch);

const mapStateToProps = state => ({
	count: state.MainReducer.count
});

Contoh.propTypes = {
	count: PropTypes.number,
	setCount: PropTypes.func.isRequired
};

Contoh.defaultProps = {
	count: 0
};

export default connect(mapStateToProps, mapDispatchToProps)(Contoh);
