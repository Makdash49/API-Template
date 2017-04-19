import React from 'react';

export class Message extends React.Component {
  render () {
    var {location, temp} = this.props;
    return (
      <h2 className="text-center">It's {temp} in {location}.</h2>
    )
  }
}
