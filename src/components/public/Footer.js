import React, { Component } from "react";
import { PageHeader,Layout,Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import "./FooterCss.css";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
      <div
        className="footer"
        style={{
          height: "230px",
          paddingLeft: "5%",
          paddingRight: "5%",
          width: "100%",
          paddingTop: "3%",
          backgroundColor: "#202124"
        }}
      >
        <div style={{ width: "33.33%", float: "left" }}>
          <img
            style={{ marginBottom: "5%" }}
            // src={require("../img/footer-logo.png")}
          ></img>
          <br />
          <h5>CrowdFund</h5>
          <p>
            Нийслэлийн Улаанбаатар Чуулгын барилгатай залгаа 
            HUB Инновацын төв, Бээжингийн гудамж 8-р хороо, СБД
          </p>
          <p>
            Харилцах утас: <strong>99119911</strong>
          </p>
        </div>
        <div
          style={{
            width: "33.33%",
            float: "left",
            paddingLeft: "5%",
            paddingRight: "5%"
          }}
        >
          <a href="#">Дотоодын хөтөлбөр олох</a>
          <hr/>
          <a href="#">Оффис ба ажилтнуудын лавлах</a>
          <hr/>
          <a href="#">Асуулт хариулт</a>
          <hr/>
          <a href="#">Олон улсын хөтөлбөр олох</a>
          <hr/>
        </div>

        <div style={{ width: "33.33%", float: "left" }}>
        <div className="listicon">
        <h5>Холбоо барих</h5>
          <FontAwesomeIcon className="iconfont" size="2x" icon={faFacebook} />
          <FontAwesomeIcon className="iconfont" size="2x" icon={faInstagram} />
          <FontAwesomeIcon className="iconfont" size="2x" icon={faTwitter} />
          <FontAwesomeIcon className="iconfont" size="2x" icon={faYoutube} />
        </div>
        </div>
      </div>
      <Layout style={{ backgroundColor:"#202124",textAlign: 'center' ,paddingTop:'0%',paddingBottom:'1%',color:"#e6e8ed"}}>
        Render ©2019 Created by Team Render
        </Layout>
      </div>
    );
  }
}

export default Footer;
