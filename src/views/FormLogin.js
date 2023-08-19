import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

function FormLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()
  const onSubmit = async () => {
    let res = await axios.post("http://localhost:3000/login_admin", {
      user_name: userName,
      pass_word: password,
    });
    if (res.data != "") {
      history.push("/admin/dashboard")
    }
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="../../img/logo.png"
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                {/* <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/> */}
                {/* <span className="h1 fw-bold mb-0">Logo</span> */}
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                label="user Name"
                id="formControlLg"
                type="text"
                size="lg"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                class="btn btn-primary"
                onClick={() => onSubmit()}
              >
                Login
              </button>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default FormLogin;
