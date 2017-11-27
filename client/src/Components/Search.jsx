import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onEnter = this.onEnter.bind(this);
  }
  onEnter(e) {
    console.log(e.charCode)
    if (e.key === 'Enter') {
      this.props.onClick(this._cityName.value);
    }
  }

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a city..."
          aria-label="Search..."
          ref={input => (this._cityName = input)}
          onKeyPress={this.onEnter}
        />
        <span className="input-group-btn">
          <button
            className="btn"
            onClick={() => {
              this.props.onClick(this._cityName.value);
            }}
            type="button"
          >
            Search
          </button>
        </span>
      </div>
    );
  }
}
export default Search;
