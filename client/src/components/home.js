import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Home extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="home-grid">
          <Cell col={12}>
            <img
              className="avatar-img"
              src="https://image.flaticon.com/icons/svg/10/10699.svg"
              alt="avartar"
            />
            <div className="banner-text">
              <h1>Exercise Together!</h1>
              <hr />
              <p>Yoga | Pilates | Home Training | G.X</p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
