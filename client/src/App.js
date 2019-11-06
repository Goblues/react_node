import React, { Component } from "react";
import "./App.css";
// bootstrap
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { GoogleLoginButton } from "react-social-login-buttons";

// mdl
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://15.164.32.128:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="G.X Platform" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/teacher">Teacher</Link>
              <Link to="/kakaomap">Kakaomap</Link>
              <Link to="/login">Login</Link>
            </Navigation>
          </Header>
          <Drawer title="G.X Platform">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/teacher">Teacher</Link>
              <Link to="/kakaomap">Kakaomap</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
