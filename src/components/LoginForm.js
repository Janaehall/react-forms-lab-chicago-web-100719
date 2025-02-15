import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault()
    if(this.state.username && this.state.password){
      this.props.handleLogin(this.state)
    }
    console.log(this.handleLogin)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    }, console.log(this.state))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          <label>
            Username
            <input onChange={this.handleChange} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleChange} id="password" name="password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
