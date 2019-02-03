import React, { Component } from 'react';
import './Login.scss';
// import '../../assets/scss/utilities.scss';
// import axios from "axios";
// import jamb from '../../assets/jamb.png';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    //bind functions to the "this" variable
    this.handleFormData = this.handleFormData.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleFormData(event) {
    event.preventDefault();

    // axios.get('http://154.113.0.202:8085/api/v1.1/metrics/all?range=ALL', {
    // }, { headers: { 'Content-Type': 'application/jsonp' } })
    //     .catch(err => {
    //         this.setState({ description: "Network Error" })
    //         console.log(err)
    //     })
  }

  handleUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <header className="header">
        <div className="card">
          <form onSubmit={this.handleFormData} className="form u-margin-top-small ">
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="name"
                placeholder="Username"
                required
                autoFocus
                onChange={this.handleUsername}
              />{' '}
              <label htmlFor="name" className="form__label">
                {' '}
                Username{' '}
              </label>{' '}
            </div>

            <div className="form__group">
              <input
                type="password"
                className="form__input"
                id="password"
                placeholder="Password"
                required
                onChange={this.handlePassword}
              />{' '}
              <label htmlFor="password" className="form__label">
                {' '}
                Password{' '}
              </label>{' '}
            </div>

            <div className="form__group u-center-text u-margin-top-small ">
              <button className="btn btn--green">login </button>{' '}
            </div>
          </form>
        </div>
      </header>
    );
  }
}
export default Login;
