import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import DisLike from "./common/dislike";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "Change Label",
      label: "Stock change",
      content: (movie) => (
        <React.Fragment>
          <button
            onClick={() => this.props.onStockIncrease(movie)}
            className="btn btn-info btn-sm"
          >
            <i className="fa fa-arrow-up" aria-hidden="true"></i>
          </button>

          <button
            onClick={() => this.props.onStockDecrease(movie)}
            className="btn btn-info btn-sm mx-2"
          >
            <i className="fa fa-arrow-down" aria-hidden="true"></i>
          </button>
        </React.Fragment>
      ),
    },

    {
      key: "Like",
      label: "Like",
      content: (movie) => (
        <React.Fragment>
          <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
          <DisLike
            disliked={movie.disliked}
            onClick={() => this.props.onDislike(movie)}
          />
        </React.Fragment>
      ),
    },
    {
      key: "Delete",
      label: "Delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm "
        >
          <i className="fa fa-trash-o fa-lg mx-1"></i>
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
