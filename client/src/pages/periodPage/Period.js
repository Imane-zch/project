import React from "react";
import "../../App.css";
import "../../style/Period.css";
import Logo from "../../assets/logo.png";
import Logo2 from "../../assets/logo2.png";
import LandingImage from "../../assets/LandingImage.png";
import "../../style/Header.css";
import "../../style/index.css";
import Period from "../../components/period/Period.js";
import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalendarPage from "../../assets/CalendarPage.png"

function PeriodPage() {
  return (
    <div className="PeriodPage"> 
    <Container>
      <Row>
      
        <Col xs={12} lg={8} style={{ padding: 0}}>
          <div>
          <h2 className="pagetitle">Calculate Your Next Period</h2>
          <img
            src={CalendarPage} 
            alt= "CalendarPagePNG" 
            className="CalendarPagePNG"
            width="630" 
            height="670"
            /> 
          </div>
        </Col>
        <Col xs={12} lg={4} style={{paddingLeft:0 }}>
          <div>
          <Period />
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default PeriodPage;
