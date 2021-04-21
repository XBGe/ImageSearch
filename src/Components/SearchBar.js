import React from "react";
import PropTypes from "prop-types";

class SearchBar extends React.Component {
  state = {
    term: ""
  };
  onFormSubmit = (e) => {
    //stop auto refresh page when press enter
    e.preventDefault();
    //passing data to parent component
    this.props.runUserSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>ImageSearch</label>
            <input
              type="text"
              placeholder="Enter any type of image name"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
SearchBar.propTypes = { runUserSubmit: PropTypes.func.isRequired };

export default SearchBar;