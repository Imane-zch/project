import React from 'react';
import '../../App.css'
import Logo from "../../assets/logo.png"
import Logo2 from "../../assets/logo2.png"
import LandingImage from "../../assets/LandingImage.png"
import '../../style/Header.css'
import '../../style/index.css'
import Button from 'react-bootstrap/Button';
import '../../style/LandingPage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

function App() {
  
  return (
    <div className='App'>
    <Container>
      <Row>
        <Col xs={12} lg={6}>
            <img
            src={Logo2} 
            alt= "MindFlow logo" 
            className="landinglogo"
            width="120" 
            height="100"
            />	
              <h1 className="landingheader">MindFlow</h1>
              <h4 className="landingtagline">Your wellbeing companion</h4>
              <img
            src={LandingImage} 
            alt= "MindFlow logo" 
            className="landingimage"
            width="550" 
            height="500"
            /> 
        </Col>
        <Col xs={12} lg={6}>
          <div className="rhc">
                <h3 className="landingheadline">Your journey starts here</h3>
                <text className="landingpararaph">
                At MindFlow, we believe in connecting with both our bodies and<br/> 
                our cycles. By gaining valuable insight into our menstrual cycles,<br/>
                we can become better equipped to make decisions about our bodies<br/>
                that work for us.<br/><br/>
                <img
                src={Logo2} 
                alt= "MindFlow logo" 
                className="landinglogo"
                width="25" 
                height="22"
                />	
                <br/>
                It can often be difficult for women to access information and<br/>
                support for women's health, so here at MindFlow we hope to be<br/>
                the first step in your journey to understanding your body's <br/>
                relationship mestruation and wellbeing.</text>	
                <div className="buttongroup">
                <Link to="/SignUp">
                <Button className="signupbutton" size="med" >Sign Up</Button>
                </Link>
                <h6 className="or">OR</h6>
                <Link to="/Login">
                <Button className="loginbutton" size="med" >Log in</Button>
                </Link>
                </div>
          </div>
        </Col>
      </Row>        
    </Container>
    </div>  
  );
}

export default App;



