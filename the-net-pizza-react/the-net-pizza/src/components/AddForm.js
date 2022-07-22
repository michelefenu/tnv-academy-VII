import React, { Component, Fragment } from "react";

class AddForm extends Component {
  initialState = {
    title: "",
    category: "",
    price: "",
  };

  state = this.initialState;

  render() {
    const { title, category, price } = this.state;
    return (
      <Fragment>
        <form>
          <h3>Aggiungi un Piatto</h3>
          <div className="row">
            <div className="col-4">
              <label className="form-label" htmlFor="title">
                Nome
              </label>
              <input
                className="form-control"
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={this.handleChange}
              />
              <br />
              <label className="form-label" htmlFor="category">
                Category
              </label>
              <input
                className="form-control"
                type="text"
                name="category"
                id="category"
                value={category}
                onChange={this.handleChange}
              />
              <br />
              <label className="form-label" htmlFor="price">
                Price
              </label>
              <input
                className="form-control"
                type="number"
                name="price"
                id="price"
                onChange={this.handleChange}
                value={price}
              />
            </div>
          </div>
        </form>
        <button className="btn btn-primary" onClick={() => this.handleSubmit()}>
          Aggiungi
        </button>
      </Fragment>
    );
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    this.props.addPiatto(this.state);
    this.setState(this.initialState);
  };
}

export default AddForm;
