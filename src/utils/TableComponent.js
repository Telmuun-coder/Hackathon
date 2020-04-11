import React, { Component } from "react";
import { Card, Select, Input, Form, Table, Button, Pagination } from "antd";
import Utils from "./Utils";
const { Option } = Select;

export default class TableComponent extends Component {
  prefix;
  title;
  columns;
  service;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 0
    };
    this.columns = [];
  }
  search(event) {
    event.preventDefault();
    this.setState({ searched: true });
    this.handlePageChange(this.state.page);
  }
  handleChangeSelect = value => {
    this.setState({ column: value });
  };
  handleChangeSearch = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  getParam() {
    return { limit: 25 };
  }
  query(params) {
    return this.service.query(params);
  }
  handlePageChange = pageNumber => {
    var params = this.getParam();
   typeof pageNumber==='number' ? params.offset = pageNumber * params.limit:params.offset = 0;
    if (
      this.state.column &&
      this.state.needle &&
      this.state.column.length > 0 &&
      this.state.needle.length > 0
    ) {
      if (params.q) {
        params.q[this.state.column] = { $instr: this.state.needle };
      } else {
        params.q = { [this.state.column]: { $instr: this.state.needle } };
      }
    }
    if (params.q && Object.keys(params.q).length > 0) {
      params.q = JSON.stringify(params.q);
    }
    this.service
      .count()
      .then(result => result.json())
      .then(result => this.setState({ count: result.count }));
    Utils.showSpinner();
    this.query(params)
      .then(result => result.json())
      .then(
        result => {
          this.setState({ data: result.items, page: pageNumber });
          Utils.hideSpinner();
        },
        err => {
          this.state.success =
            "Сервертэй холбогдож чадсангүй та интернет холболтоо шалгана уу";
          Utils.hideSpinner();
        }
      );
  };
  componentDidMount() {
    this.handlePageChange(0);
  }
  renderExtra() {
    let extra = [
      <Form key={0} onSubmit={e => this.search(e)}>
        <Select
          name="column"
          defaultValue="ner"
          value={this.state.column}
          onChange={this.handleChangeSelect}
          placeholder='Төрөлөө сонгоно уу?'
        >
          {this.columns.map(element => (
            <Option key={element.dataIndex} value={element.dataIndex}>
              {element.title}
            </Option>
          ))}
        </Select>
        <Input
          type="text"
          name="needle"
          placeholder="Хайх..."
          value={this.state.needle}
          onChange={this.handleChangeSearch}
        />
        <Button onClick={this.handlePageChange}>Хайх</Button>
      </Form>
    ];
    return extra;
  }
  render() {
    
    return (
      <div>
        <Card key={0} title={this.title} extra={this.renderExtra()}>
          <Table
            pagination={false}
            dataSource={this.state.data}
            rowKey="id"
            columns={this.columns}
          />
          <br></br>
          <br></br>
          <Pagination
            size="small"
            total={this.state.count ? (this.state.count / 25) * 10 : 10}
            onChange={page => {
              this.handlePageChange(page - 1);
            }}
          />
        </Card>
      </div>
    );
  }
}
