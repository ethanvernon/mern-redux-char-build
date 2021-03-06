import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { Container, Row, Col } from 'reactstrap';
import Identity from './Identity';
import Name from './Name';
import Parameters from './Parameters';
import PCon from './PCon';
import NCon from './NCon';
import Motivation from './Motivation';
import Goal from './Goal';
import Gear from './Gear';
import SaveButton from './SaveButton';
import Response from './Response';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: ''
		}
	}

	render() {
		return (
			<div>
				<Identity/>
				<Name/>
				<Parameters/>
				<PCon/>
				<NCon/>
				<Motivation/>
				<Goal/>
				<Gear/>
				<SaveButton/>
				<Response/>
			</div>
		);
	}
};

export default connect(null, null)(App);