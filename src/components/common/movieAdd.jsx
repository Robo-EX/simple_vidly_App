import React from "react";
import { getMovies } from "../../services/fakeMovieService";
import Joi from "joi-browser";
import Input from "./input";
import Form from "./form";
import { getGenres } from "../../services/fakeGenreService";

class MovieAdd extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genreId: Joi.required().label("Genre"),
    numberInStock: Joi.number().greater(0).required().label("NumberInStock"),
    dailyRentalRate: Joi.number()
      .greater(0)
      .less(10)
      .required()
      .label("DailyRentalRate"),
  };

  doSubmit = () => {
    let mov = getMovies().push(this.state.data);
    this.setState({ data: mov });
    console.log(this.state.data.genreId);
  };

  render() {
    const { data, errors } = this.state;
    const { history, match } = this.props;
    return (
      <div>
        <h2 className="text-center my-2 font-italic">Data Form</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="title"
            label="Title"
            value={data.title}
            onChange={this.handleChange}
            placeholder={"Enter Title"}
            error={errors.title}
          ></Input>

          <div className="form-group">
            <label htmlFor="genre">Genre select</label>

            <select
              className="form-control"
              id={data.genreId}
              name="genreId"
              label="Genre"
              onChange={this.handleChange}
              placeholder="Enter Genre"
              error={errors.genre}
            >
              {getGenres().map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <Input
            name="numberInStock"
            label="NumberInStock"
            value={data.numberInStock}
            onChange={this.handleChange}
            placeholder="Enter Stock"
            error={errors.numberInStock}
          ></Input>
          <Input
            name="dailyRentalRate"
            label="DailyRentalRate"
            value={data.dailyRentalRate}
            onChange={this.handleChange}
            placeholder="Enter Rate"
            error={errors.dailyRentalRate}
          ></Input>
          <button
            type="submit"
            disabled={this.validate()}
            className="btn btn-primary"
            onClick={() => history.goBack("/movies")}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default MovieAdd;
