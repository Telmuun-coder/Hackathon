import React, { Component } from "react";
import { Card } from "antd";
import { Steps, Icon } from "antd";
import { Row, Col, Input } from "antd";
import IdeaService from "../../services/IdeaService";
class Story extends Component {
  state = { data: {} };
  componentDidMount() {
    let param = {};
    param.q = JSON.stringify({ id: this.props.id ? this.props.id : null });
    let service = new IdeaService();
    service
      .query(param)
      .then(result => result.json())
      .then(result => {
        this.setState({ data: result.items[0] });
        console.log("this state", this.state.data);
      });
  }
  render() {
    const { Step } = Steps;
    return (
      <div>
        <Row>
          <Col span={14}>
            <Card
              title={this.state.data.story_name}
              //   {this.state.stepNow}
              style={{
                width: 720,
                margin: "20px 30px 30px 0px",
                borderRadius: 10,
                border: " 1px solid #C8C8C8"
              }}
            >
              {/* {this.state.Desc} */}
              {this.state.data.story_describe}
              <br></br>
              <br></br>
              <br></br>
              <Steps>
                <Step
                  status={
                    this.state.data.process_type === 1 ? "process" : "wait"
                  }
                  title="Хийсвэр загвар"
                  icon={<Icon type="project" />}
                />
                <Step
                  status={
                    this.state.data.process_type === 2 ? "process" : "wait"
                  }
                  title="Дэмо"
                  icon={<Icon type="read" />}
                />
                <Step
                  status={
                    this.state.data.process_type === 3 ? "process" : "wait"
                  }
                  title="Бүтээгдэхүүн"
                  icon={<Icon type="shopping" />}
                />
                <Step
                  status={
                    this.state.data.process_type === 4 ? "process" : "wait"
                  }
                  title="Бэлэн"
                  icon={<Icon type="smile-o" />}
                />
              </Steps>
            </Card>

            <img
              style={{ width: "100%", height: " 100%" }}
              src={require("../../img/sanaanizurag.jpg")}
            ></img>
            <p>
              WalkingPad R1 Pro нь гүйх, алхах горимоор боловсруулагдсан өдөр
              тутмын дасгалын хэрэгцээг хүссэн газартаа тохируулж өгдөг.
              WalkingPad R1 Pro нь уламжлалт гүйлтийн замаас 90% зай хэмнэх
              бөгөөд давхар нугалах загвар, гөлгөр гулсмал дугуйны
              тусламжтайгаар амархан нугалж хадгалдаг.
            </p>
            <h3 style={{ fontSize: 25, marginLeft: 20 }}>Давуу талууд</h3>
            <ul style={{ fontSize: 20 }}>
              <li>Найдвартай</li>
              <li>Хурдан</li>
              <li>Итгэмжлэгдсэн</li>
            </ul>
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%"
              }}
              src={require("../../img/sanaanizurag2.jpg")}
            ></img>
            <p>
              Conventional treadmills are huge and occupy unnecessary space. The
              WalkingPad R1 Pro incorporates a unique dual folding mechanism,
              the deck and handle can be easily folded up for compact and simple
              storage.
            </p>
            <img src={require("../../img/sanaagif.gif")}></img>
            <img src={require("../../img/sanaazurag3.jpg")}></img>
            <img src={require("../../img/sanaazurag7.jpg")}></img>
            <p>
              WalkingPad R1 Pro is your perfect exercise buddy that allows you
              to stay healthy under different scenarios.
            </p>
            <img src={require("../../img/sanaazurag4.jpg")}></img>
            <img src={require("../../img/sanaazurag5.jpg")}></img>
            <img src={require("../../img/sanaazurag6.jpg")}></img>
            <p>
              Learn from the feedback of our previous customers, we redesign the
              WalkingPad with the capability to serve your running need. We also
              reshape the WalkingPad by adding a balancing handle and prolonging
              the deck for the better running experience.
            </p>
            <img src={require("../../img/sanaagif2.gif")}></img>
          </Col>
          <Col span={10}></Col>
        </Row>
      </div>
    );
  }
}

export default Story;
