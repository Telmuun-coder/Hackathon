import React, { Component } from "react";
import { Row, Col, Input, Result } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./css/Carousel.css";
import Carousels from "./Carousels";
import TopIdeas from "./TopIdeas";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Background from "../img/glasses.jpg";
import IdeaService from "../services/IdeaService";
const { Search } = Input;
class Main extends Component {
  state = { data: [] };
  componentWillMount() {
    let param = {};
    param.q = JSON.stringify({ $orderby: { id: "desc" } });
    let service = new IdeaService();
    service
      .query(param)
      .then(result => result.json())
      .then(result => {
        for (let i = 0; i < 4; i++) {
          this.state.data.push(result.items[i].id);
        }
        this.forceUpdate();
        console.log("hey", this.state.data);
      });
    this.forceUpdate();
  }
  render() {
    const data = this.state.data;
    return (
      <React.Fragment>
        <Carousels main={true} />

        <h1
          style={{
            textAlign: "center",
            marginTop: 30,
            marginBottom: 10,
            lineHeight: 1,
            color: "#000000"
          }}
        >
          Тэргүүлэгч санаанууд 
        </h1>
        <div
          style={{
            border: "1px solid #54595F",
            textAlign: "center",
            width: 110,
            marginBottom: 20,
            marginLeft: "46%",
            borderRadius: 5
          }}
        >
          {""}
        </div>

        <Row type="flex" justify="space-around">
          <Col span={4}>
            {data[0] ? (
              <TopIdeas
                id={data[0]}
                money="216,000"
                percent="76"
                content=" Spent smart save easy invest consciously and pave the way to a
              better financial future with Oval."
                title="Oval money"
                investors="217"
                img={require("../img/topidea1.jpg")}
              />
            ) : null}
          </Col>
          <Col span={4}>
            {data[1] ? (
              <TopIdeas
                id={data[1]}
                money="2,000"
                percent="23"
                content="Spent smart save easy invest consciously and pave the way to a
              better financial future with Oval."
                title="Oval money"
                investors="27"
                img={require("../img/topidea2.jpg")}
              />
            ) : null}
          </Col>
          <Col span={4}>
            {data[2] ? (
              <TopIdeas
                id={data[2]}
                money="102,000"
                percent="36"
                content=" Spent smart save easy invest consciously and pave the way to a
              better financial future with Oval."
                title="Oval money"
                investors="7"
                img={require("../img/topidea3.jpg")}
              />
            ) : null}
          </Col>
          <Col span={4}>
            {data[3] ? (
              <TopIdeas
                id={data[3]}
                money="100,000"
                percent="100"
                content="Spent smart save easy invest consciously and pave the way to a
                better financial future with Oval."
                title="Oval money"
                investors="1"
                img={require("../img/topidea4.jpg")}
              />
            ) : null}
          </Col>
        </Row>
        <Row style={{ marginLeft: "4.7%" }}>
          <Col span={8}></Col>
          <Col span={8}>
            {/* <Col type="flex" justify="space-around"> */}
            <br></br>
            <div
              style={{
                border: "1px solid #E8E8E8",
                borderRadius: "5px",
                width: "330px",
                padding: "8px",
                margin: 20,
                pointer: "cursor"
              }}
            >
              <FontAwesomeIcon className="iconfont" icon={faEye} />
              <Link to="/ideas">
                <a> Бүх хөрөнгө оруулах боломжуудыг харах</a>
              </Link>
            </div>
          </Col>
          <Col span={8}></Col>
        </Row>
        <Row
          style={{
            paddingLeft: "4.7%",
            paddingRight: "4.7%",
            // backgroundColor: "red",
            backgroundImage: "url(" + Background + ")",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            // width: 500,
            // backgroundPosition: "0px -120px",
            height: 360,
            // opacity: "0.75"
            color: "black"
          }}
          type="flex"
          justify="center"
        >
          <Col span={12}>
            <div
              style={{
                opacity: "1",
                marginTop: 50,
                marginBottom: 50
              }}
            >
              <h1
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase"
                }}
              >
                Шинэ мэдээлэл
              </h1>
              <p style={{ fontSize: "1.2em", lineHeight: "1.5em" }}>
                бүрийг цаг алдалгүй аваарай!
              </p>
              <p style={{ fontSize: "1.2em", lineHeight: "1.5em" }}>
                Бид таны мэдээллийг гуравдагч этгээд хэн нэгэнд хуваалцахгүй.
                {<br></br>}
                Биднийг нууцлалын талаар {<a>энд</a>} дарж дэргэрэнгүй харна уу.
              </p>
              <Search
                placeholder="enter email"
                enterButton="Захиалах"
                size="large"
                onSearch={value => console.log(value)}
              />
            </div>
          </Col>
          <Col span={12}></Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default Main;
