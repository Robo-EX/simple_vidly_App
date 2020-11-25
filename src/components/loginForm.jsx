import React from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().min(3).max(30).required().label("Email Id"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h2 className="text-center my-2 font-italic">Details</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Email Id"
            value={data.username}
            type="email"
            onChange={this.handleChange}
            placeholder="Enter Email"
            error={errors.username}
          ></Input>

          <Input
            name="password"
            label="Password"
            type="password"
            value={data.password}
            onChange={this.handleChange}
            placeholder="Enter Password"
            error={errors.password}
          ></Input>
          {/* <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <button
            type="submit"
            // disabled={this.validate()}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
