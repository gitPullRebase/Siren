import React from 'react';

class Search extends React.Component {
	constructor(props){ 
		super(props)
	}


	render() {
		return (
			<div> 
				<input ref={input => this._cityName = input} />
				<button onClick = {()=>{ this.props.onClick(this._cityName.value)}} > Search </button> 
			</div>
			) 

	}
	

}

export default Search;