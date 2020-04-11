import React, { Component } from "react";
import { Carousel, Form } from "antd";
import { Row, Col } from "antd";
import { Button } from "antd";
import { PageHeader, Input } from "antd";
import "./infoidea.css";
import { Card, Icon, Avatar, Tabs, Modal, message } from "antd";
import { Progress } from "antd";
import Carousels from "../Carousels";
import { faUser, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import Comments from "./Comments";
import Faq from "./Faq";
import Story from "./Story";
import IdeaService from "../../services/IdeaService";
import cookie from "react-cookies";
const { Meta } = Card;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
class InfoOfIdea extends Component {
  state = {
    visible: false,
    investVisible: false,
    data: {},
    userId: "",
    invest_money: {}
  };

  componentDidMount() {
    console.log("props", this.props.match.params.id);
    let param = {};
    param.q = JSON.stringify({ id: this.props.match.params.id });
    let service = new IdeaService();
    service
      .query(param)
      .then(result => result.json())
      .then(result => {
        this.setState({ data: result.items[0] });
        console.log("this state", this.state.data);
      });
    this.setState({ userId: cookie.load("userId") });
    console.log("cookie", cookie.load("userId"));
  }
  checkLogin(e) {
    if (this.state.userId === undefined) {
      window.alert("Та нэвтэрнэ үү?");
    } else {
      this.setState({ investVisible: true });
    }
  }
  handleChange(e) {
    this.state.invest_money[e.target.name] = e.target.value;
    this.forceUpdate();
  }
  handleSubmit(e){
    e.preventDefault();
    message.success("Амжилттай хийгдлээ!");
    this.setState({investVisible:false});
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Row>
          <Col span={13}>
            <div className="test">
              <Carousels main={false} />
            </div>
          </Col>
          <Col span={9} offset={1}>
            <div className="info">
              <h1
                style={{
                  fontSize: "2rem",
                  fontWeight: 600,
                  lineHeight: 1.3
                }}
              >
                {this.state.data.name}
              </h1>
              <p
                style={{
                  fontFamily: "benton-sans,Helvetica,Sans-serif",
                  fontWight: 500,
                  lineHeight: 1.5,
                  letterSpacing: 0,
                  color: "#2a2a2a",
                  textAlign: "left",
                  fontSize: "1.25rem"
                }}
              >
                {this.state.data.describe}
              </p>
            </div>
            <Row type="flex" justify="space-around" align="middle">
              <Col span={3}>
                <FontAwesomeIcon size="2x" className="iconfont" icon={faUser} />
              </Col>
              <Col span={21}>
                <p style={{ margin: "unset" }}>
                  <span style={{ fontWeight: 700 }}> 216ш</span> Хөрөнгө
                  оруулагчид
                </p>
              </Col>
            </Row>
            <Row type="flex" justify="space-around" align="middle">
              <Col span={3}>
                <FontAwesomeIcon
                  size="2x"
                  className="iconfont"
                  icon={faMoneyBill}
                />
              </Col>
              <Col span={21}>
                <p style={{ margin: "unset", fontWeight: 700 }}>256,231MNT</p>
              </Col>
            </Row>
            <Progress percent={48} />
            <p>
              Зорилтот хөрөнгө:
              <span style={{ fontWeight: 700 }}>
                {this.state.data.money
                  ? this.state.data.money
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : null}
                MNT
              </span>
            </p>
            <Row>
              <Col span={5}>
                <Button onClick={e => this.checkLogin(e)} type="primary">
                  Хөрөнгө оруулах
                </Button>
              </Col>
              <Col
                span={5}
                style={{ margin: "0 15px 0 15px", padding: "0 15px 0 15px" }}
              >
                <Button>Засварлах</Button>
              </Col>
              <Col span={14} style={{ width: "40%" }}>
                <Row type="flex" justify="end">
                  <Col span={4}>
                    {" "}
                    <FontAwesomeIcon
                      className="iconfont"
                      size="2x"
                      icon={faFacebook}
                    />
                  </Col>
                  <Col span={4}>
                    {" "}
                    <FontAwesomeIcon
                      className="iconfont"
                      size="2x"
                      icon={faInstagram}
                    />
                  </Col>
                  <Col span={4}>
                    {" "}
                    <FontAwesomeIcon
                      className="iconfont"
                      size="2x"
                      icon={faTwitter}
                    />
                  </Col>
                  <Col span={4}>
                    <FontAwesomeIcon
                      className="iconfont"
                      size="2x"
                      icon={faYoutube}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ paddingLeft: "4%", paddingRight: "4%" }}>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Танилцуулга" key="1">
              <Story id={this.props.match.params.id} />
            </TabPane>
            <TabPane tab="Ихэвчлэн асуудаг асуултууд" key="2">
              <Faq />
            </TabPane>
            <TabPane tab="Сэтгэгдэл" key="3">
              <Comments />
            </TabPane>
          </Tabs>
        </Row>
        <Modal
          title="Санамж"
          visible={this.state.investVisible}
          onCancel={() => this.setState({ investVisible: false })}
          footer={null}
        >
          <Form onSubmit={e=>this.handleSubmit(e)}>
            <p>Старт ап санааны нэр: </p>
            <Input value={this.state.data.name} disabled={true}></Input>
            <Form.Item label="Хөрөнгө оруулах дүн">
              {getFieldDecorator("invest_money", {
                rules: [
                  {
                    required: true,
                    message: "Хөрөнгө оруулах дүн хоосон байна!"
                  }
                ]
              })(
                <Input
                  name="invest_money"
                  onChange={e => this.handleChange(e)}
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Хүсэлт илгээх
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default Form.create()(InfoOfIdea);
