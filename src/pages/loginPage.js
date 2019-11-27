import React from 'react';


class Login extends React.Component {
  constructor(props){
    super(props) 
    this.state={
      username: "",
      password: "",
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/login", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({      
        user: this.state
      })

    }).then(res=> res.json())
    .then(data => {
      localStorage.setItem("jwt", data.jwt)
    }
      )
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
  return (
    <div className="App">
      <form onSubmit={this.handleSubmit}>
        username: <input type="text"  onChange={this.handleChange} name="username" value={this.state.username}/>
        password: <input type="text"  onChange={this.handleChange} name="password" value={this.state.password}/>
        <input type="submit" />
      </form>
    </div>
  );
}}

export default Login;
