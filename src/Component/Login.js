import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
                    
                        <div className = "email" className = "email" > <input type = "text" placeholder = "Username | Email" /> </div> 
                             <input  type = "text" className = "password" placeholder = "Password" />  

                            <button className = "continue"  ><Link style={{ textDecoration: 'none', color: 'white' }}
                             to='/Home' target='Login'  > Login  </Link></button> 

                        </div>

            <b className = "bold" > forgot your password <Link to = '/Recover' target = 'Login' > Click Here  </Link> </b>
  
                              
                
                </div>
               
            </div>
      );
    }


}

export default Login;

