import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import FormLogin from "views/FormLogin";
import Dashboard from "views/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
   
 
  <BrowserRouter>
  
    <Switch>
    
      {/* <Route path="/" component={FormLogin} /> */}
      
       <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
       {/* <Redirect from="/" to="/admin/login" />  */}
       <Route path="/" component={FormLogin}/>
      
     
    </Switch>
  </BrowserRouter>
 
);
