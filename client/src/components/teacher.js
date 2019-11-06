import React, { Component } from "react";
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

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ minwidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS236JMxuVJsGe3Eg9ZGD1_usFHcYdFPEvK0ABXr9o4Yv9kJpg1&s) center / cover"
            }}
          >
            Jung Jin Woo
          </CardTitle>
          <CardText>Yoga King God General</CardText>
          <CardActions border center>
            <Button colored>home</Button>
            <Button colored>Subscribe</Button>
            <Button colored>Like</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Pilates</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is Home Training</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is G.X</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Yoga</Tab>
          <Tab>Pilates</Tab>
          <Tab>Home Training</Tab>
          <Tab>G.X</Tab>
        </Tabs>
        <section className="teacher-grid">
          {/*this.toggleCategories()*/}
          <Grid className="teacher-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Teacher;
