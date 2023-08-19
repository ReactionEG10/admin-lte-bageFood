import React, { useState } from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import moment from "moment/moment";

import ContentHeader from "./ContentHeader";
import OverView from "./OverView";

function Dashboard() {
  const [year, setYear] = useState(moment().format("L"))
  const [day, setDay] = useState(moment().format('DD'))
  const [mo, setMo] = useState(moment().format("MM"))
  const [yearNow, setYearNow] = useState(moment().format("YY"))

  const previousYear = () => {
    setYear(moment().subtract(1, 'days').calendar().format("L"))
  }

  const nextYears = () => {
    setYear(moment().add(1, 'days').format("L"))
  }
  return (
    <div>
      
      <Container fluid>
      <div>
        <ContentHeader name="Total Data For App"/>
      <OverView />
      </div>
        
        {/* <ContentHeader name={"Order Today :"+year} />
        <label>date {day+mo+yearNow}</label>
        <FormYear year={year} />
        <div className="row">
          <div className="col-6">
            <button className="btn btn-light btn-lg" onClick={() => previousYear()}><span className="fas fa-angle-double-left"></span>&nbsp;Previous Year</button>
          </div>
          <div className="col-6">
            <button className="btn btn-light btn-lg float-right" onClick={() => nextYears()}>Next Year&nbsp;<span className="fas fa-angle-double-right"></span></button>
          </div>
        </div> */}
      </Container>
  
    </div>
  );
}

export default Dashboard;
