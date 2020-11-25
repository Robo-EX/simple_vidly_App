import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-thumbs-up";
    if (!this.props.liked) classes = "fa fa-thumbs-o-up";
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

export default Like;
