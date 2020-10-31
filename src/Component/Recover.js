import React from 'react';
import { Link } from 'react-router-dom';
// import 'reactjs-popup/dist/index.css';
 
class Recover extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return( 

      /* This is the login form. it contains the Email, password and a login link to go to the next page. */
      <div className = "Recover" >

          <h1 className = "loginn" >Random Matrix</h1>
        <div className = "boxx" >
          <h1  >  Recover your password </h1>

          <div className = "All">
                    
               <input type = " text " className = " Email "  placeholder = " Email " /> 
               <input type = " text " className = " Number "  placeholder = " Number " /> 
               <input className = " password " type = " text " placeholder = " Password " />  
               <input className = " Comfirm Password " type = " text " placeholder = " Confirm Password " />

                <button className = "continue"  ><Link style={{ textDecoration: 'none', color: 'white' }}
                  to='/Home' target='Login'  > Login  </Link></button> 

          </div>
            <b className = "bold" > Remember password <Link to = '/' target = 'Signup' > Click Me </Link> </b>

        </div>
                    
  
      </div>
    ); 
  }

}

export default Recover;