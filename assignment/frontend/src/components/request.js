import React, { Component } from "react";
import axios from "axios";
class Request extends Component {
  state = {
    products: [],
    count: 0,
    order: []
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    axios
      .get("/api")
      .then(res => {
        this.setState({
          products: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  addHandler = async item => {
    await this.setState({
      order: [...this.state.order, item],
      count: this.state.count + 1
    });
    console.log(this.state.order);
  };
  sendToServer = () => {
    console.log("in server client" + this.state.order);
    axios
      .post("/purchase", this.state.order)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    let columns = [];
    this.state.products.forEach((item, i) => {
      columns.push(
        <div className="col-lg-3" key={i}>
          <div
            className="row"
            key={i}
            style={{
              padding: "30px",
              border: "1px solid black",
              marginRight: "15px",
              marginBottom: "10px",
              display: "block"
            }}
          >
            <div
              className="col-sm-4"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.company}</p>
              <img
                src={item.src}
                width="200"
                height="200"
                alt="Upgrade Browser"
              ></img>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <button
                className="btn btn-secondary btn-md"
                onClick={() => this.addHandler(item)}
              >
                Add
              </button>
              <button className="btn btn-secondary btn-md">Remove</button>
            </div>
          </div>
        </div>
      );
      if ((i + 1) % 4 === 0) {
        columns.push(<div className="w-100" key={null}></div>);
      }
    });

    return (
      <div className="container">
        <div className="row" style={{ marginTop: "68px" }}>
          {columns}
        </div>
        <p className="text-center">Products Added : {this.state.count}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px"
          }}
        >
          <buttton
            className="btn btn-success btn-md"
            onClick={this.sendToServer}
          >
            Place Order
          </buttton>
        </div>
      </div>
    );
  }
}
export default Request;
