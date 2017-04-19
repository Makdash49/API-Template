import React from 'react';
import {Form} from 'Form';
import {Message} from 'Message';
import myApi from 'myApi';
import uuid from 'uuid/v1';

export class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch (location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined
    });

    myApi.getTemp(location).then(function (data) {

      that.setState({
        isLoading: false,
        location: data.name,
        temp: data.temp
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  }

  render () {

    console.log('this.state:', this.state);
    var {isLoading, errorMessage, location, temp} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;

      } else if (temp && location) {
          return <Message location={location} temp={temp}/>
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        alert(errorMessage)
      }
    }

    return (
      <div className="row">
        <h1 className="page-title">Get Weather</h1>
        <Form onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}
