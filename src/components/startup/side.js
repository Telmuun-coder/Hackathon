import React from "react";
import { Card } from "antd";
import { Button } from "antd";
import { Row, Col } from "antd";

const side = () => {
  const { Meta } = Card;
  return (
    <div>
      <Card
        hoverable
        title="Миний мэдээлэл"
        style={{ width: 350, margin: 50, height: 300, borderRadius: 10 }}
      ></Card>
      <Card
        hoverable
        title="Товч мэдээлэл"
        style={{ width: 350, margin: 50, height: 500, borderRadius: 10 }}
      >
        <h4>Манай сайт танд ойлгомжтой байж чадаж байна уу?</h4>
        <Row>
          <Col span={12}>
            <Button>Тийм</Button>
          </Col>
          <Col span={12}>
            <Button>Үгүй</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default side;
