import React from 'react';
import '../../App.css'
import Logo from "../../assets/logo.png"
import Logo2 from "../../assets/logo2.png"
import RegisterPage from "../../assets/RegisterPage.png"
import '../../style/Header.css'
import '../../style/index.css'
import Button from 'react-bootstrap/Button';
import Registration from '../../components/login/Registration.js';
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from "../../components/sidebar/Sidebar";

function SignUp() {
  return (
    <div className="App">
    <Container>
    <Row>
    
      <Col xs={12} lg={8} >
        <div>
        <h1 className="signupheadline" style={{ paddingRight: 23, paddingBottom: 15}}>Let's get started.</h1>
        <text className="signuppararaph">
                Are you ready to gain insight into your period and mood?<br/> 
                Sign up now to become a member of the MindFlow family today. 
                </text>	
        <img
          src={RegisterPage} 
          alt= "RegisterPagePNG" 
          className="RegisterPagePNG"
          width="500" 
          height="550"
          style={{ paddingRight: 70, paddingTop: 30}}
          /> 
        </div>
      </Col>

      <Col xs={12} lg={4} style={{paddingRight: 200}}>
        <div>
        <Registration />
        </div>
      </Col>

    </Row>
  </Container>
    </div>
  );
}

export default SignUp;

