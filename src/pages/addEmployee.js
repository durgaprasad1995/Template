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

class addEmployee extends Component {
  state = {};
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
  render() {
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
                  required={true}
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

export default addEmployee;
