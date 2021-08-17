/* eslint-disable default-case */
import React, { Component } from "react";
import styles from "./registration.module.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: {
        val: "",
        errorMessage: "",
      },
      name: {
        val: "",
        errorMessage: "",
      },
      city: {
        val: "",
        errorMessage: "",
      },
      address: {
        val: "",
        errorMessage: "",
      },
      email: {
        val: "",
        errorMessage: "",
      },
      phone: {
        val: "",
        errorMessage: "",
      },
      pass: {
        val: "",
        errorMessage: "",
      },
      passConf: {
        val: "",
        errorMessage: "",
      },
    };

    this.validation = this.validation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validation(e) {
    const type = e.target.name;
    const val = this.state[type].val;

    if (val) {
      switch (type) {
        case "username":
        case "name":
          if (val.length < 3) {
            this.setError(type, `${type} must be longer than 2 characters`);
          } else {
            this.hideError(type);
          }
          break;
        case "city":
          const cityReg = /^[a-zA-Z\s]*$/;
          if (!cityReg.test(val)) {
            this.setError(type, "not valid city");
          } else {
            this.hideError(type);
          }
          break;
        case "email":
          const emailReg =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (!emailReg.test(val)) {
            this.setError(type, "not valid email");
          } else {
            this.hideError(type);
          }
          break;
        case "phone":
          const phoneReg =
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

          if (!phoneReg.test(val)) {
            this.setError(type, "not valid phone number");
          } else {
            this.hideError(type);
          }
          break;
        case "pass":
          if (val.length < 6) {
            this.setError(type, `${type} must be minimum 6 characters`);
          } else {
            this.hideError(type);
          }
          break;
        case "passConf":
          const pass = this.state.pass.val;
          if (pass !== val) {
            this.setError(type, "password not match");
          } else {
            this.hideError(type);
          }
          break;
      }
    } else {
      this.hideError(type);
    }
  }

  setError(type, message) {
    this.setState({
      [type]: {
        ...this.state[type],
        errorMessage: message,
      },
    });
  }

  hideError(type) {
    this.setState({
      [type]: {
        ...this.state[type],
        errorMessage: "",
      },
    });
  }

  handleChange(e) {
    const key = e.target.name;
    const val = e.target.value;
    this.setState({
      [key]: {
        ...this.state[key],
        val,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = Object.entries(this.state);
    const toSendData = data.reduce((acc, current) => {
      const key = current[0];
      const val = current[1].val;
      acc[key] = val;
      return acc;
    }, {});
  }

  render() {
    return (
      <div className={styles.bg}>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.container}>
            <div className={styles.inputWrap}>
              <div className={styles.inputGroup}>
                <Input
                  val={this.state.username.val}
                  change={this.handleChange}
                  valid={this.validation}
                  errorMessage={this.state.username.errorMessage}
                  type="text"
                  place="Username"
                  name="username"
                />
                <Input
                  val={this.state.name.val}
                  change={this.handleChange}
                  valid={this.validation}
                  errorMessage={this.state.name.errorMessage}
                  type="text"
                  place="Name"
                  name="name"
                />
                <Input
                  val={this.state.city.val}
                  change={this.handleChange}
                  valid={this.validation}
                  errorMessage={this.state.city.errorMessage}
                  type="text"
                  place="City"
                  name="city"
                />
                <Input
                  val={this.state.address.val}
                  change={this.handleChange}
                  valid={this.validation}
                  errorMessage={this.state.address.errorMessage}
                  type="text"
                  place="Address"
                  name="address"
                />
                <Button btnName="Back" url="/" />
              </div>
              <div className={styles.inputGroup}>
                <Input
                  val={this.state.email.val}
                  change={this.handleChange}
                  valid={this.validation}
                  errorMessage={this.state.email.errorMessage}
                  type="text"
                  place="Email"
                  name="email"
                />
                <Input
                  val={this.state.phone.val}
                  change={this.handleChange}
                  valid={this.validation}
                  errorMessage={this.state.phone.errorMessage}
                  type="number"
                  place="Phone number"
                  name="phone"
                />
                <Input
                  val={this.state.pass.val}
                  change={this.handleChange}
                  valid={this.validation}
                  errorMessage={this.state.pass.errorMessage}
                  type="password"
                  place="Password"
                  name="pass"
                />
                <Input
                  val={this.state.passConf.val}
                  change={this.handleChange}
                  valid={this.validation}
                  errorMessage={this.state.passConf.errorMessage}
                  type="password"
                  place="Confirm password"
                  name="passConf"
                />
                <Button btnName="Submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
