import React, { Component } from 'react'

export default class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container sign-in section">
                <form onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-2 center">Sign In</h5>
                    <div className="input-field">
                        <i className="material-icons prefix grey-text text-lighten-1">email</i>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix grey-text text-lighten-1">keyboard</i>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field right">
                        <button className="btn indigo lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
