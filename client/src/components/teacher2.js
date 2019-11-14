import React from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Teacher2 extends React.Component {
  render() {
    return (
      <div>
        <Teacher2Profile
          id={this.props.id}
          image={this.props.image}
          name={this.props.name}
        />
        <CardText>
          <Teacher2Info text={this.props.text} />
        </CardText>
      </div>
    );
  }
}

class Teacher2Profile extends React.Component {
  render() {
    return (
      <div>
        <CardTitle>
          <img src={this.props.image} alt="profile" />
        </CardTitle>
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}

class Teacher2Info extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Teacher2;
