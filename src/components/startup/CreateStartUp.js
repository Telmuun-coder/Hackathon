import React, { Component } from "react";
import { Divider, Form, Input, Button, Checkbox } from "antd";
import TextArea from "antd/lib/input/TextArea";
import "./createStartUp.css";
import IdeaService from "../../services/IdeaService";

class CreateStartUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idea: {}
    };
  }
  handleChange(event) {
    this.state.idea[event.target.name] = event.target.value;
    this.forceUpdate();
  }
  handleCheck(event) {
    this.state.idea[event.target.name] = event.target.value;
    this.forceUpdate();
  }
  handleSubmit(event) {
    event.preventDefault();
    window.alert(
      "Хэрэв таны оруулах гэж буй санаа болон STARTUP нь зохиогийн эрх аваагүй бол оюуны өмчийн газарт хандан зохиогчийн эрх аван уу!"
    );
    let service = new IdeaService();
    service
      .add(this.state.idea)
      .then(
        result => result.json(),
        error => {
          return error;
        }
      )
      .then(result => {
        window.location.reload();
      });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="create-start-up">
        <Form style={{ margin: "60px" }} onSubmit={e => this.handleSubmit(e)}>
          <h2 style={{ paddingTop: "25px" }}>Ерөнхий мэдээлэл</h2>
          <p>
            Анхны сайн сэтгэгдэл төрүүл: кампанит ажлын зорилгоо танилцуулж,
            хүмүүст илүү ихийг мэдэхийг хүс. Энэхүү үндсэн мэдээлэл нь таны
            кампанит ажлыг сурталчилгааны хуудас, сурталчилгааны карт, хайлтанд
            харуулах болно.
          </p>
          <div>
            <Form.Item label="Гарааны бизнесийн нэр">
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "Гарааны бизнесийн нэрийг оруулна уу!"
                  }
                ]
              })(
                <Input
                  name="name"
                  onChange={e => this.handleChange(e)}
                  style={{ width: "50%", height: "50px" }}
                />
              )}
            </Form.Item>
            <Form.Item label="Тайлбар">
              {getFieldDecorator("describe", {
                rules: [
                  {
                    required: true,
                    message: "Тайлбар оруулна уу!"
                  }
                ]
              })(
                <TextArea
                  name="describe"
                  onChange={e => this.handleChange(e)}
                />
              )}
            </Form.Item>
          </div>
          <Divider></Divider>
          <div>
            <h2>Үйл явц</h2>
            <Form.Item label="Үйл явцийн нэр">
              {getFieldDecorator("story_name", {
                rules: [
                  {
                    required: true,
                    message: "Үйл явцийн нэрийг оруулна уу!"
                  }
                ]
              })(
                <Input
                  name="story_name"
                  onChange={e => this.handleChange(e)}
                  style={{ width: "50%", height: "50px" }}
                />
              )}
            </Form.Item>
            <Form.Item label="Тайлбар">
              {getFieldDecorator("story_describe", {
                rules: [
                  {
                    required: true,
                    message: "Үйл явц тайлбар оруулна уу!"
                  }
                ]
              })(
                <TextArea
                  name="story_describe"
                  onChange={e => this.handleChange(e)}
                />
              )}
            </Form.Item>
          </div>
          <Divider></Divider>
          <div>
            <h2>Старт ап-ийн үе шат</h2>
            <Checkbox
              name="process_type"
              value="1"
              onChange={e => {
                this.handleCheck(e);
              }}
            >
              Хийсвэр загвар
            </Checkbox>
            <Checkbox
              name="process_type"
              value="2"
              onChange={e => {
                this.handleCheck(e);
              }}
            >
              Демо
            </Checkbox>
            <Checkbox
              name="process_type"
              value="3"
              onChange={e => {
                this.handleCheck(e);
              }}
            >
              Бүтээгдэхүүн
            </Checkbox>
            <Checkbox
              name="process_type"
              value="4"
              onChange={e => {
                this.handleCheck(e);
              }}
            >
              Бэлэн
            </Checkbox>
          </div>
          <Divider></Divider>
          <div>
            <h2>Санхүүжилт</h2>
            <Form.Item label="Хөрөнгө оруулах дүн">
              {getFieldDecorator("money", {
                rules: [
                  {
                    required: true,
                    message: "Хөрөнгө оруулах дүнг бичнэ үү!"
                  }
                ]
              })(
                <Input
                  name="money"
                  onChange={e => this.handleChange(e)}
                  style={{ width: "50%", height: "50px" }}
                />
              )}
            </Form.Item>
          </div>
          <div>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Үргэлжлүүлэх
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    );
  }
}
export default Form.create()(CreateStartUp);
