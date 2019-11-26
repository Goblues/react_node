/*global kakao*/
import React, { Component } from "react";
import "./kakaomap.css";
import { Tabs, Tab, Grid, Cell, Button } from "react-mdl";
import Kakaoregister from "./kakaoregister";

class Kakaomap extends Component {
  state = { activeTab: 0, lat: "", long: "" };
  map;
  componentDidMount() {
    //동적 로딩
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=fba789bf140b6fc6a1e71b4b0495d609&autoload=false";
    document.head.appendChild(script);

    // 원래버전
    script.onload = () => {
      kakao.maps.load(() => {
        var el = document.getElementById("map");
        var map = new kakao.maps.Map(el, {
          center: new kakao.maps.Coords(523951.25, 1085073.75)
        });
        var marker = new kakao.maps.Marker({});
        marker.setMap(map);

        kakao.maps.event.addListener(map, "click", function(MouseEvent) {
          var latlng = MouseEvent.latLng;
          marker.setPosition(latlng);
          // var message = "위도: " + latlng.getLat() + ", ";
          // message += "경도: " + latlng.getLng();
          // var resultDiv = document.getElementById("clickLatlng");
          // resultDiv.innerHTML = message;
          var latitude = latlng.getLat();
          var longitude = latlng.getLng();
          var resultlat = document.getElementById("lat");
          var resultlong = document.getElementById("long");
          resultlat.innerHTML = latitude;
          resultlong.innerHTML = longitude;
        });
      });
    };
  }

  kakaoregister = () => {
    if (this.state.activeTab === 0) {
      return <div>{this.componentDidMount()}</div>;
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Kakaoregister />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>Exercise Join Page</h1>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="kakaomap" id="map">
        {/* <div
          style={{ position: "fixed", bottom: "50px", right: "150px" }}
          id="clickLatlng"
        ></div> */}
        <div
          style={{ position: "fixed", bottom: "80px", right: "150px" }}
          id="lat"
        ></div>
        <div
          style={{ position: "fixed", bottom: "60px", right: "150px" }}
          id="long"
        ></div>
        <div
          style={{ position: "fixed", top: "75px", right: "250px" }}
          className="category-tabs"
        >
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>Home</Tab>
            <Tab>Register</Tab>
            <Tab>Join</Tab>
          </Tabs>
          <section className="teacher-grid">
            {/*this.toggleCategories()*/}
            <Grid className="teacher-grid">
              <Cell col={12}>
                <div className="content">{this.kakaoregister()}</div>
              </Cell>
            </Grid>
          </section>
        </div>
      </div>
    );
  }
}

export default Kakaomap;
