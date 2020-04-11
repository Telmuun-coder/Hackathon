import React from "react";
import { Card } from "antd";
import "./Items.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { Progress } from "antd";

const items = props => {
  const title = "Чацарганааа";
  const content = "Үндэсний хэв маягаар орчин үеийн хувцаслалтыг хийх.";
  const style = {
    height: " auto",
    border: "1px solid black"
    // display: "flex"
  };
  return (
    <div>
      <Card
        title={<h1>{title}</h1>}
        extra={
          <Link to={"/"} className="btn-more">
            Дэлгэрэнгүй
          </Link>
        }
        // style={{ width: 750 }}aaa
        className="miniContent"
      >
        <Row>
          <Col span={5}>
            <img
              src={require("../../img/fixedAppIdea.jpg")}
              className="Iimg"
              style={{ width: 70, height: 100, margin: 20 }}
            ></img>
          </Col>
          <Col span={19}>
            {content}
            <Progress
              style={{ margin: "15px 20px 5px 0px" }}
              // type="circle"
              status="active"
              percent={props.pro}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default items;
