import React from "react";
import { Form, Button } from "react-bootstrap";
import { ChangeData, RequestData } from "./../Action/formAction";
import { connect } from "react-redux";
class BioInformation extends React.Component {
  state = {
    name: "",
    age: "",
    height: "",
    gender: "",
    mobileNumber: "",
  };
  render() {
    return (
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          margin: "50px auto",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Bio Information</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={this.state.name}
                onChange={(event) =>
                  this.setState({ name: event.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter age"
                value={this.state.age}
                onChange={(event) => this.setState({ age: event.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Height in CM</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter height"
                value={this.state.height}
                onChange={(event) =>
                  this.setState({ height: event.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                onChange={(event) =>
                  this.setState({ gender: event.target.value })
                }
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Mobile Number"
                value={this.state.mobileNumber}
                onChange={(event) =>
                  this.setState({ mobileNumber: event.target.value })
                }
              />
            </Form.Group>
            <div style={{ marginTop: "10px" }}>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.ChangeData({
                    name: this.state.name,
                    age: this.state.age,
                    height: this.state.height,
                    gender: this.state.gender,
                    mobileNumber: this.state.mobileNumber,
                  });
                  this.props.RequestData();
                }}
              >
                Store Data
              </Button>
              {/* Uncomment below button to get data from redux store */}
              <Button
                style={{ marginLeft: "5px" }}
                variant="success"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();

                  this.props.RequestData();
                  console.log("Data from redux store", this.props.bioForm);
                }}
              >
                Get Data
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bioForm: state.bioForm,
  };
};

export default connect(mapStateToProps, { ChangeData, RequestData })(
  BioInformation
);
