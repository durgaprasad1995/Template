import React, { Component } from "react";

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  Button,
  ButtonGroup,
  ButtonToolbar,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Tooltip
} from "reactstrap";
import "../styles/style.css";

class listEmployee extends Component {
  state = {
    userList: [],
    isLoaded: false
  };

  componentDidMount() {
    fetch("./people.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          userList: data
        });
        console.log("data:", JSON.stringify(data));
      });
    // fetch("./people.json")
    //   .then(response => {
    //     console.log(response);
    //     return response.json();
    //   })
    //   .then(data => {
    //     // Work with JSON data here
    //     console.log(data);
    //   })
    //   .catch(err => {
    //     // Do something for an error here
    //     console.log("Error Reading data " + err);
    //   });
  }

  // componentWillReceiveProps(nextprops) {
  //   console.log("----------", nextprops);
  // }

  handleclick = () => {
    this.props.history.push("/addEmployee");
    // window.location("");
  };

  render() {
    var { isLoaded, items, userList } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    const style = {
      marginLeft: "1609px"
    };
    const tableStle = {
      width: " 70%",
      textAlign: "center",
      marginLeft: "150px"
    };
    return (
      <div>
        <ButtonGroup className="mr-3 mb-3">
          <Button style={style} onClick={this.handleclick} color="primary">
            Add
          </Button>
        </ButtonGroup>
        <table border="1" style={tableStle}>
          <tbody>
            <tr>
              <th>Names</th>
              <th>Rating</th>
              <th>Description</th>
            </tr>
            {userList.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.rating}</td>
                <td>{item.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default listEmployee;
