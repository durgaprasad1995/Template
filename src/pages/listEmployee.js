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
  Tooltip,
  Table
} from "reactstrap";
import "../styles/style.css";
// import Fab from "@material-ui/core/Fab";
// import Icon from "@material-ui/core/Icon";
// import AddIcon from "@material-ui/icons/Add";

class listEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      isLoaded: false,
      details: []
    };
  }

  componentDidMount() {
    fetch("./people.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          userList: data
        });
        console.log("data:", JSON.stringify(data));
        console.log(1 + 2 + "3");
        console.log(1 + 2 + "3");
        console.log("1" + "2" + "12");
        console.log(+"1" + "2" + "3");

        console.log("1" + 2 + 3 + "123");
        console.log(1 + 2 + 3 + "33");
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
  handleEdit = item => {
    console.log("dddd", item);
    this.setState({
      details: item,
      showpopUp: true
    });

    this.props.history.push("/addEmployee");
  };
  handleclick = () => {
    debugger;
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
      // width: " 70%",
      textAlign: "center"
      // marginLeft: "150px"
    };
    return (
      <div>
        <ButtonGroup className="mr-3 mb-3">
          <Button style={style} onClick={this.handleclick} color="primary">
            Add
          </Button>
        </ButtonGroup>
        <Row>
          <Col>
            <Card body>
              <Table>
                <table border="1" style={tableStle}>
                  <tbody>
                    <tr>
                      <th>Names</th>
                      <th>Rating</th>
                      <th>Description</th>
                      <th colSpan="2">Actions</th>
                    </tr>
                    {userList.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.rating}</td>
                        <td>{item.Description}</td>
                        <td>
                          <Button
                            color="primary"
                            onClick={() => this.handleEdit(item)}
                            active
                            id={item.id}
                          >
                            Edit
                          </Button>
                        </td>
                        <td colSpan="2">
                          <Button color="danger" active>
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Table>
              {/* <Fab
                position="left-bottom"
                slot="fixed"
                morphTo=".toolbar.fab-morph-target"
              >
                <Icon ios="f7:add" md="material:add" />
                <Icon ios="f7:close" md="material:close" />
              </Fab> */}
              {/* <Fab color="primary" aria-label="Add">
                <AddIcon />
              </Fab> */}
              {/* <Fab color="secondary" aria-label="Edit">
                <Icon>edit_icon</Icon>
              </Fab> */}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default listEmployee;
