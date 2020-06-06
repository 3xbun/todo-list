import React from "react";
import "./ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListItem(props) {
  const items = props.items;
  const ListItems = items.map((item, index)=> {
    return <div className="list" key="item.key">
      <p>No. {index+1} {item.text}</p>
      <span>
        <FontAwesomeIcon className="faicons" icon="trash"></FontAwesomeIcon>
      </span>
    </div>
  })
  return <div>{ListItems}</div>;
}

export default ListItem;