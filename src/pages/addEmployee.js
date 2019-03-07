import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  ButtonGroup,
  FormFeedback
} from "reactstrap";
import Page from "components/Page";
// import list from "./listEmployee";
import { bindActionCreators } from "redux";
import * as employeeListDetails from "../actions/AddEmployee";
import { connect, Provider } from "react-redux";
function mapStateToProps(store) {
  console.log("---sot", store);
  return {
    employeeList: store.AddEmployee.AddEmployee //store.reducer.reducername
    // error: store.login.error
  };
}
function mapDispatchToProps(dispatch) {
  // return { actions: bindActionCreators(loadboardAct, dispatch) };
  let actions = bindActionCreators({ employeeListDetails });
  return { ...actions, dispatch };
}

class addEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: ""
    };
  }

  test = () => {};

  componentDidMount() {
    var comp = this.props.item;
    console.log("propssssssssss", comp);
    let data = [];
    this.props.dispatch(employeeListDetails.addEmployee(data));
    console.log("=========", data);
  }
  componentWillReceiveProps(nextprops) {
    console.log("nextprops", nextprops);
    console.log("ADDDDDDDDDDDDDD", nextprops.employeeList);
  }

  //   fetch("./people.json")
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         isLoaded: true,
  //         userList: data
  //       });
  //       console.log("data:", JSON.stringify(data));
  //     });
  //   // fetch("./people.json")
  //   //   .then(response => {
  //   //     console.log(response);
  //   //     return response.json();
  //   //   })
  //   //   .then(data => {
  //   //     // Work with JSON data here
  //   //     console.log(data);
  //   //   })
  //   //   .catch(err => {
  //   //     // Do something for an error here
  //   //     console.log("Error Reading data " + err);
  //   //   });
  // }
  // handleChange = e => {
  //   const name = e.target.name;
  //   this.setState({ [name]: e.target.value });
  // };
  // componentDidMount() {
  //   const employee = this.props.userList.find(function(emp) {
  //     if (emp.id === e.target.id) {
  //       return emp;
  //     }
  //   });
  //   this.setState({
  //     firstname: employee.firstname
  //   });
  // }
  render() {
    console.log("props", this.props);

    return (
      <Page
        title="Employee"
        breadcrumbs={[{ name: "AddEmployee", active: true }]}
      >
        <Row>
          <Col xl={6} lg={12} md={12}>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Employee Name</Label>
                <Input
                  type="text"
                  name="ename"
                  placeholder="Please Enter your name"
                  value={this.state.firstname}
                  required={true}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email ID</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Id"
                  required={true}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Deatils</Label>
                <Input type="textarea" name="text" />
              </FormGroup>

              <ButtonGroup className="mr-3 mb-3">
                <Button>Add Employee</Button>
              </ButtonGroup>
            </Form>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addEmployee);
