import React, { Component } from "react";

import "./input.styles.scss";

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, type, value, handleChange } = this.props;
    return (
      <div className="group">
        <input
          className="form-input"
          onChange={handleChange}
          name={name}
          type={type}
          value={value}
        />
        {this.props.label ? (
          <label
            className={`${
              this.props.value.length ? "shrink" : ""
            } form-input-label`}
          >
            {this.props.label}
          </label>
        ) : null}
      </div>
    );
  }
}

export default FormInput;
