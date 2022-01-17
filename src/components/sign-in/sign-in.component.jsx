import React, { Component } from "react";

// css
import './sign-in.styles.scss';

class SignIn extends Component {
    constructor () {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            email:'',
            password:''
        });
    }

    render () {
        const {email, password} = this.state;
        return (
            <div className="sign-in">
                <h2>
                    I already have an account
                </h2>
                <span>Sign in with your email and password</span>
                <form 
                    onSubmit={this.handleSubmit}
                >
                    <input 
                        name="email" 
                        type="email" 
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <label>email</label>
                    <input 
                        name="password" 
                        type="password" 
                        value={password}
                        onChange={this.handleChange} 
                        required
                    />
                    <label>password</label>
                    <input type="submit" value="submit form"></input>
                </form>
            </div>
        );
    }
}

export default SignIn;