import React, { Component } from "react";
import TopIdeas from "../TopIdeas";
import { Row, Col } from "antd";
class Ideas extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
}
  render() {
    const idea = [];
    const ideas = [];
    for (let i = 0; i < 16; i++) {
      idea.push(
        <Col span={4}>
          <TopIdeas
            money={Math.floor(Math.random() * Math.floor(500000))
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            percent={Math.floor(Math.random() * Math.floor(100))}
            content=" Spent smart save easy invest consciously and pave the way to a
                    better financial future with Oval."
            title="Oval money"
            investors={Math.floor(Math.random() * Math.floor(230))}
            img={require(`../../img/topidea${i + 1}.jpg`)}
          />
        </Col>
      );
    }
    for (let i = 0; i < 16; i += 4) {
      ideas.push(
        <Row style={{ marginTop: "30px" }} type="flex" justify="space-around">
          {idea[i]}
          {idea[i + 1]}
          {idea[i + 2]}
          {idea[i + 3]}
        </Row>
      );
    }

    return <div style={{ padding: "5%" }}>{ideas}</div>;
  }
}

export default Ideas;
