import React, { Component } from "react";
import Items from "./Items";
import AddBtn from "./addBtn";
import Side from "./side";
import { Row, Col } from "antd";

class Firstpage extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Col span={16}>
          <div>
            <Items
              pro={92}
              // title={this.props.title}
              // title={this.props.content}
            ></Items>
            <Items
              pro={28}
              // title={this.props.title}
              // title={this.props.content}
            ></Items>
            <Items
              pro={52}
              // title={this.props.title}
              // title={this.props.content}
            ></Items>
          </div>
        </Col>
        <Col span={8}>
          <div style={{ marginTop: 50 }}>
            <AddBtn></AddBtn>
            <Side></Side>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Firstpage;
