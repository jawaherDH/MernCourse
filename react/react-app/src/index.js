import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clients from "./client";
import Phone from "./phone";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';




//ReactDOM.render(routing, document.getElementById("root"));

//Use createRoot method to enable Concurrent Mode

ReactDOM.createRoot(
  document.getElementById('root')
  ).render(<App />);



 

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/client">Clients</Link>
        </li>
        <li>
          <Link to="/phone">Phone</Link>
          </li>
      </ul>
      <Route path="/" component={App} />
      <Route path="/client" component={Clients} />
      <Route path="/phone" component={Phone} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
