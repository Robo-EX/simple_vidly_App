import React from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().min(3).max(30).required().label("Email Id"),
    password: Joi.string().min(3).required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    console.log("Registered");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="my-2">
        <h1>Register</h1>
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
          <Input
            name="name"
            label="Name"
            type="name"
            value={data.name}
            onChange={this.handleChange}
            placeholder="Enter Name"
            error={errors.name}
          ></Input>
          <button
            type="submit"
            // disabled={this.validate()}
            className="btn btn-primary"
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
