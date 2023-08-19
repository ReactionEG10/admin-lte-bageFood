import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function OverView() {
  const [dataList, setDataList] = useState([]);
  const [coust, setCoust] = useState([]);
  const [store, setStore] = useState([]);
  const [rider, setRider] = useState([]);
  const [order, setOrder] = useState([])
  const [totalOrderPrice, setTotalOrderPrice] = useState(0)

  const getUser = async () => {
    let res = await axios.get("http://localhost:3000/get_user_status/1");
    if (res != "") {
      let sum = res.data.length;
      setCoust(sum);
    }
  };

  const getUserStore = async () => {
    let res = await axios.get("http://localhost:3000/get_all_store");
    if (res != "") {
      let sum = res.data.length;
      setStore(sum);
    }
  };

  const getUserrider = async () => {
    let res = await axios.get("http://localhost:3000/get_user_status/3");
    if (res != "") {
      let sum = res.data.length;
      setRider(sum);
      
    }
  };

  const getOrder = async () => {
    let res = await axios.get("http://localhost:3000/get_request_all");
    if (res != "") {
      let sum = res.data.length;
      setOrder(sum);
    }
  };

  const getSumOreder = async ()=>{
    let res = await axios.get("http://localhost:3000/get_request_sum_all");
    if (res != "") {
      console.log("price ",res.data[0].total);
      let t = res.data[0].total
      let sum = t*0.3
      console.log("sum ",sum);
      setTotalOrderPrice(sum)
    }
  }

  useEffect(() => {
    getUser();
    getUserrider();
    getUserStore();
    getOrder();
    getSumOreder();
  }, []);
  return (
    <div>
      <Row>
        <Col lg="3" sm="6">
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col xs="5">
                  <div className="icon-big text-center icon-warning">
                    <i className="far fa-user nc-chart text-warning"></i>
                  </div>
                </Col>
                <Col xs="7">
                  <div className="numbers">
                    <p className="card-category">Costumer</p>
                    <Card.Title as="h4">{coust} User</Card.Title>
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
              <div className="stats">
              
               
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col lg="3" sm="6">
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col xs="5">
                  <div className="icon-big text-center icon-warning">
                    <i className="far fa-shopping-basket nc-light-3 text-success"></i>
                  </div>
                </Col>
                <Col xs="7">
                  <div className="numbers">
                    <p className="card-category">Store</p>
                    <Card.Title as="h4">{store}</Card.Title>
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
              <div className="stats">
               
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col lg="3" sm="6">
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col xs="5">
                  <div className="icon-big text-center icon-warning">
                    <i className="far fa-motorcycle nc-vector text-danger"></i>
                  </div>
                </Col>
                <Col xs="7">
                  <div className="numbers">
                    <p className="card-category">Rider</p>
                    <Card.Title as="h4">{rider}</Card.Title>
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
              <div className="stats">
             
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col lg="3" sm="6">
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col xs="5">
                  <div className="icon-big text-center icon-warning">
                    <i className="far fa-dollar-sign nc-favourite-28 text-primary"></i>
                  </div>
                </Col>
                <Col xs="7">
                  <div className="numbers">
                    <p className="card-category">Total Income</p>
                    <Card.Title as="h4">{totalOrderPrice} Bath</Card.Title>
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
              <div className="stats">
              
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="3" sm="6">
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col xs="5">
                  <div className="icon-big text-center icon-warning">
                    <i className="far fa-clipboard-list nc-favourite-28 text-primary"></i>
                  </div>
                </Col>
                <Col xs="7">
                  <div className="numbers">
                    <p className="card-category">Total Orders</p>
                    <Card.Title as="h4">{order} Orders</Card.Title>
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
              <div className="stats">
                
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
