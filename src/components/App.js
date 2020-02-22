import React, { Component } from 'react';
import '../App.css';

const App = () => {
	return <Counter />;
};

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}

	_plusButton = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

	_minusButton = () => {
		this.setState({ counter: this.state.counter - 1 });
	};

	render() {
		return (
			<div>
				<div>count : {this.state.counter}</div>
				<button
					onClick={() => {
						this._plusButton();
					}}
				>
					+1
				</button>
				<button
					onClick={() => {
						this._minusButton();
					}}
				>
					-1
				</button>
			</div>
		);
	}
}

export default App;
