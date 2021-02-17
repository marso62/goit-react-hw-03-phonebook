import React, { Component } from "react";
import style from "../style.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handeleInputChange = (item) => {
    const { name, value } = item.target;
    this.setState({ [name]: value });
  };

  hendleSubmit = (e) => {
    const { name, number } = this.state;
    e.preventDefault();

    this.props.onAddTask(name, number);

    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.hendleSubmit} className={style.formStyleBorder}>
        <label className={style.lablePosition}>
          Name
          <input
            type="name"
            value={name}
            onChange={this.handeleInputChange}
            name="name"
            required
          />
        </label>

        <label className={style.lablePosition}>
          Number
          <input
            type="phone"
            value={number}
            onChange={this.handeleInputChange}
            name="number"
            placeholder="645-17-79"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            required
          />
        </label>

        <button type="submit" className={style.buttonStyleForm}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
