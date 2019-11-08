import React from 'react';

const Spinner = (props) => {
	return(
		<div className="ui active dimmer">
			<div className="ui big text loader">
				{props.message}
			</div>
		</div>
	)
};	

/* defaultProps jest ustawiany gdy nie podamy message , musi być props , nie mozę być properties*/
Spinner.defaultProps = {
	message: 'Loading...'
};

export default Spinner;