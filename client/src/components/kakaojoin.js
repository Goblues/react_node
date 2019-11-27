import React, { Component } from "react";
// bootstrap
import { Card, CardTitle, CardText, Button } from "reactstrap";
import "./lectureregister.css";

class Kakaoregister extends Component {
  render() {
    return (
      <div>
        <Card body>
          <CardTitle>Cycle</CardTitle>
          <CardText>People: 4</CardText>
          <Button>Join</Button>
        </Card>
        <Card body>
          <CardTitle>Workout</CardTitle>
          <CardText>People: 4</CardText>
          <Button>Join</Button>
        </Card>
      </div>
    );
  }
}

export default Kakaoregister;
