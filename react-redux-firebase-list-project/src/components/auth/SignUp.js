import React, { Component } from 'react'

export default class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div className="container sign-up section">
                <h5 className="grey-text text-lighten-1 center">Sign Up</h5>
                <form className="white" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <i className="material-icons prefix grey-text lighten-1">email</i>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={this.hanldeChange}/>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix grey-text lighten-1">keyboard</i>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={this.hanldeChange}/>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix grey-text lighten-1">face</i>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" onChange={this.hanldeChange}/>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix grey-text lighten-1">people</i>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" onChange={this.hanldeChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn indigo lighten-1 right">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}
