import React from 'react';
import '../../scss/Login.scss';

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMsg: ""
    };
  }
  onSubmit = (event) => {
    event.preventDefault();
    if(this.state.email.match(/[a-zA-Z0-9]*@[a-z]+\.[a-z.]+/) && this.state.password.length > 0){
      sessionStorage.setItem('auth', true);
      this.props.history.push('/recipes');
    }
    else{
      this.setState({errorMsg: "Enter a vaild email and any password"});
    }
  }
  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }
  renderMessage(){
    if(this.state.errorMsg !== ""){
      return <h5 className="errorMsg">{this.state.errorMsg}</h5>;
    }
  }
  render(){
    return (
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={this.onSubmit}>
          {this.renderMessage()}
          <label>Email:</label>
          <input type="text" className="email" onChange={this.onEmailChange} value={this.state.email} />
          <label>Password:</label>
          <input type="password" className="password" onChange={this.onPasswordChange} value={this.state.password} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}