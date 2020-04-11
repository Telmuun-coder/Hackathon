import React, { Component } from "react";
import { Card, Progress, Row, Col, Modal } from "antd";
import { faUser, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from "react-router-dom";
import IdeaService from "../services/IdeaService";
const { Meta } = Card;

class TopIdeas extends Component {
  state = { status: "active", visible: false, redirect: false, data: {} };
  
  componentDidMount() {
    if (this.props.percent == 100) {
      this.state.status = "null";
      this.forceUpdate();
    }
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

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  //aaa
  routeChange = () => {
    let url = "/startup/infoOfidea/"+this.props.id;
    if (this.state.redirect) return <Redirect to={url} />;
  };
  render() {
    return (
      <div>
        {this.routeChange()}
        <Modal
          title="Санамж"
          visible={this.state.visible}
          onCancel={() => this.setState({ visible: false })}
          cancelText="Болих"
          okText="Зөвшөөрөх"
          onOk={this.setRedirect}
        >
          <p>
            Энэхүү санаа болон гарааны бизнес нь хувь хүн, тухайн бүлэг
            хүмүүсийн оюуны өмч тул та бусдыг болон өөрийгөө хүндлэн оюуны
            өмчийн хулгай хийхгүй байна уу! Хэрэв оюуны хулгай хийсэн тохиолдолд
            ЗОХИОГЧИЙН ЭРХ БОЛОН ТҮҮНД ХАМААРАХ ЭРХИЙН ТУХАЙ ХУУЛЬ-ийн 31.1-т
            заасанчлан Эрүүгийн хууль, эсхүл Зөрчлийн тухай хуульд заасан
            хариуцлага хүлээлгэнэ.
          </p>
        </Modal>

        <a onClick={() => this.setState({ visible: true })}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                style={{ height: "150px" }}
                alt="example"
                src={this.props.img ? this.props.img : null}
              />
            }
          >
            <h2>{this.state.data.name}</h2>
            <p>{this.state.data.describe}</p>
            <Row type="flex" justify="start">
              <Col span={4}>
                <FontAwesomeIcon className="iconfont" icon={faUser} />
              </Col>
              <Col span={6}>
                <p>{this.props.investors}</p>
              </Col>
              <Col span={4}>
                <FontAwesomeIcon className="iconfont" icon={faMoneyBill} />
              </Col>
              <Col span={6}>
                <p>{this.state.data.money?this.state.data.money.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ","):null}MNT</p>
              </Col>
            </Row>

            <Progress percent={this.props.percent} status={this.state.status} />
          </Card>
        </a>
      </div>
    );
  }
}

export default TopIdeas;
