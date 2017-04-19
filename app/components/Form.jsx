import React from 'react';

export class Form extends React.Component {

  onFormSubmit (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input type='text' ref="location" placeholder='Search weather by city'/>
        <button className="button">Submit</button>
      </form>
    );
  }
}
