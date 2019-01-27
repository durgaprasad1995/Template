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
  DropdownItem
} from "reactstrap";
class listEmployee extends Component {
  state = {};
  handleclick = () => {
    this.props.history.push("/addEmployee");
    // window.location("");
  };
  render() {
    const style = {
      marginLeft: "1609px"
    };
    return (
      <ButtonGroup className="mr-3 mb-3">
        <Button style={style} onClick={this.handleclick} color="primary">
          Add
        </Button>
      </ButtonGroup>
    );
  }
}

export default listEmployee;
