import React from "react";

const ListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem,
  } = props;
  return (
    // <ul className="list-group">
    //   {items.map((item) => (
    //     <li
    //       onClick={() => onItemSelect(item)}
    //       key={item[valueProperty]}
    //       className={
    //         item === selectedItem
    //           ? "list-group-item active"
    //           : "list-group-item "
    //       }
    //     >
    //       {item[textProperty]}
    //     </li>
    //   ))}
    // </ul>
    <div className="dropdown">
      <button
        className="btn btn-outline-secondary dropdown-toggle  my-2 "
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Genre Selection
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {items.map((item) => (
          <button
            type="button"
            key={item[valueProperty]}
            onClick={() => onItemSelect(item)}
            className={
              item === selectedItem ? "dropdown-item active" : "dropdown-item"
            }
          >
            {item[textProperty]}
          </button>
        ))}
      </div>
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
