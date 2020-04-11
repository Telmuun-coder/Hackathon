import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Carousel, Button } from "antd";
import "antd/dist/antd.css";
import "./css/Carousel.css";
import { relative } from "path";

class Carousels extends Component {
  state = {};
  render() {
    return (
      <Carousel autoplay>
        <div className="carousels-div-render">
          <img
            alt="example"
            src={require("../img/carausel1.jfif")}
            className="img-cover"
          />
          {this.props.main
            ? [
                <h1 className="title-carousels">Шинэ кофе</h1>,
                <p className="describe-carousels">HUB кофе </p>,
                <Link to={"/"} className="btn-carousels">
                  Дэлгэрэнгүй
                </Link>
              ]
            : null}
        </div>
        <div className="carousels-div-render">
          <img
            alt="example"
            src={require("../img/carausel2.jfif")}
            className="img-cover"
          />
          {this.props.main
            ? [
                <h1 className="title-carousels">Шинэ кино студи</h1>,
                <p className="describe-carousels">HUB студи </p>,
                <Link to={"/"} className="btn-carousels">
                  Дэлгэрэнгүй
                </Link>
              ]
            : null}
        </div>
        <div className="carousels-div-render">
          <img
            alt="example"
            src={require("../img/carausel3.jfif")}
            className="img-cover"
          />
          {this.props.main
            ? [
                <h1 className="title-carousels">Шинэ ундаа</h1>,
                <p className="describe-carousels">HUB ундаа </p>,
                <Link to={"/"} className="btn-carousels">
                  Дэлгэрэнгүй
                </Link>
              ]
            : null}
        </div>
        <div className="carousels-div-render">
          <img
            alt="example"
            src={require("../img/carausel4.jfif")}
            className="img-cover"
          />
          {this.props.main
            ? [
                <h1 className="title-carousels">Шинэ хувцас</h1>,
                <p className="describe-carousels">HUB хувцас </p>,
                <Link to={"/"} className="btn-carousels">
                  Дэлгэрэнгүй
                </Link>
              ]
            : null}
        </div>
      </Carousel>
    );
  }
}

export default Carousels;
