import React, { Component } from "react";

class Dislike extends Component {
  render() {
    let classes = "fa fa-thumbs-down mx-1";
    if (!this.props.disliked) classes = "fa fa-thumbs-o-down mx-1";
    return (
      <i
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Dislike;
