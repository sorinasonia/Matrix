import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "../App.css";
class Login extends React.Component {


constructor(props){
super(props)
}

    render() {
        return ( 
            /* This is the login form. it contains the Email, password and a login link to go to the next page. */
            <div className = "login" > 
                <div className = "box" >
                    <h1 className = "loginn" >LOGIN</h1>

                    <div className = "All">
                    
                        <div className = "email" className = "email" > <input type = "text" placeholder = "Email" /> </div> 
                            <div className = "password"> <input  type = "text" placeholder = "Password" />  </div>

                            <button className = "continue"  ><Link style={{ textDecoration: 'none', color: 'white' }}
                             to='/Home' target='Login'  > Login  </Link></button> 

                        </div>

            <b className = "bold" >Forgot your password  <a target="_blank" href= "https://accounts.google.com/signin/recovery?hl=en" > Click Here </a> </b>
                </div>
            </div>
      );
    }


}

export default Login;

