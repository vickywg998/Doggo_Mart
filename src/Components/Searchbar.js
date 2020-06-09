import React from "react";
import { Search } from "semantic-ui-react";

const Searchbar = (props) => {
  return (
    <Search 
    value={props.search}
    onChange={e => props.handleChangeSearch()}
    type="text"
      />
  );
};

export default Searchbar;
