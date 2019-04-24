import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from './action-creators/simpleAction';
import './App.scss';
import Title from './Title';
import Name from './Name';
import {Header} from './Header';
import Markdown from './Markdown';
import OutputBox from './OutputBox';
import { Container, Row } from 'reactstrap';

class App extends Component {
 constructor(props) {
   super(props);

   this.state = {
     input: ''
   }

   this.handleChange = this.handleChange.bind(this);
   this.submitMessage = this.submitMessage.bind(this);
 }

 handleChange(event) {
   this.setState({
     input: event.target.value
   });
 }

 submitMessage() {
   this.props.submitNewMessage(this.state.input);

   this.setState({
     input: ''
   });
 }

	render() {
		return (
			<div>
				<Header />
				<Name />
				<Container className='markdown'>
					<Row noGutters>	
						<Markdown />
						<OutputBox />
					</Row>
				</Container>


				<h2>Type in a new Message:</h2>
				<input
				value={this.state.input}
				onChange={this.handleChange}/><br/>
				<button onClick={this.submitMessage}>Submit</button>
				<ul>{
				this.props.messages.map( (message, idx) => {
				return (
				<li key={idx}>{message}</li>
				)
				})
				}
				</ul>
			</div>
		);
	}
};

const mapStateToProps = ({ messages }) => {
  /**
   * Destructuring out messages from state and assigning it to the key
   * messages, since the key and value are bother the same you can leave out
   * messages: messages and just have messages, both are the same
   */
  return { messages }
};

const mapDispatchToProps = (dispatch) => {
 return {
   submitNewMessage: (message) => {
     dispatch(addMessage(message))
   }
 }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
