import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// zasady class: extends po React Component , musze mieć metode render()

class App extends React.Component{

	/*
	constructor(props){ // to też musi byc zawsze
		super(props); // to musi być zawsze
		this.state = { lat: null, errorMessage: ''};
	};
	*/
	// state można inicjalizować na dwa sposoby 1 powyżej i 2 poniżej , oba są równoważne
	// ale it is recommended to updload data in componentDidMount
	state = {lat: null, errorMessage: ''};

	componentDidMount(){
			window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// to upadete state we have to call setState
				this.setState({lat: position.coords.latitude});
			},
			(err) => {
				this.setState({errorMessage: err.message})
			}

			);
			console.log('My coomponent was mount')
	};
	// po componentDidMount aktuALIZUJE SIE np. state
	componentDidUpdate(){
		console.log('My coomponent was update')
	}
	renderContent(){
		if(this.state.errorMessage && !this.state.lat){
			return(<div>Error: {this.state.errorMessage}</div>)
		}
		if(!this.state.errorMessage && this.state.lat){
			return(
				<SeasonDisplay lat={this.state.lat}/>
			)
		}
		return(
			<Spinner  message='Please accept location request'/>
		)
	};

	render(){
		return(
			<div className='border red'>
				{this.renderContent()}
			</div>
		)
	};
};

ReactDOM.render(
	<App/>,
	document.querySelector('#root')
);
