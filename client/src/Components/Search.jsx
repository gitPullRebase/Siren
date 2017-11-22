import React from 'react';

class Search extends React.Component {
	constructor(props){
		super(props)
	}


	render() {
		return (
			<div className="input-group">
				<input
					type="text"
					className="form-control"
					placeholder="Search..."
					aria-label="Search..."
					ref={input => this._cityName = input} />
				<span className="input-group-btn">
					<button
						className="btn"
						onClick = {()=>{ this.props.onClick(this._cityName.value)}}
						type="button">
						Search
					</button>
				</span>
			</div>
			)

	}


}

export default Search;
