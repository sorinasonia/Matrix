import React from "react";
import { Link } from 'react-router-dom'
import wheel from "../Asset/wheel.gif";
import { Container, Row, Col, setConfiguration} from 'react-grid-system';

setConfiguration({ defaultScreenClass: 'sm', gridColumns: 20 });

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        matrix : [],
        x:5,
        y:5,
        min: 1,
        max: 5,
      };
    }
  
     //One of the lifecycle of our app, this is the very first function that get called and we're initiailizing the matrix generation from here.
    componentDidMount() {
      this.generateMatrixs();
    }

     //here is where we're generating the random two numbers between 1 to 5 and appendind zero(0) at the end to give us a two digits number.
    generateNumber = () => {  
      var min = this.state.min;
      var max = this.state.max;

      const r = Math.floor(Math.random() * (max - min + 1) + min);
      return `${0}${r}`;
    }
    
    wheel() {
        return <div className = "onee" > 
            <img src = {wheel} alt = "wheel"/>
        </div>
    }

     //Here we're generating the column base on the x and y which determins the 5 / 5 matrix
    generateMatrixs = () => {
      const matrix = this.state.x * this.state.y;
      var i = 0;
      const randomizedMatrix = []

      while(i<matrix){
        randomizedMatrix.push(this.generateNumber());
        i++;
      }

      this.setState({ matrix: randomizedMatrix});
    }

    getMatrix = () =>{
      return this.state.matrix.map(e =><Col sm={4}>
        <div className = "matrix">
          <h1>{e}</h1>
            </div>
          </Col>);
    }

      render() {
        return (
          
          <div className="generators">

              <button className = "continue"><Link style={{ textDecoration: 'none', color: 'white' }} to='/' target=''>back</Link> </button>
            <Container className = "con" >
              <Row>
                  <this.getMatrix/>
              </Row>
            </Container>

              <div className ="inputContainer" >
              
                <div className ="inputs">
                  <input className = "generator"
                  // style={{backgroundColor: 'crimson', color:'white', height: 60}}
                    type="submit" value="Generate Number" onClick={() => { this.generateMatrixs() }}  />
                  <this.wheel/>
                </div>

              <div> 

              </div>
            </div>
          </div>
        );
      }
  }

export default Home;