import React from "react";
import { Input } from "semantic-ui-react";

const Searchbar = (props) => {
  return (
    <Input
    value={props.search}
    action={{ icon: 'search' }}
    placeholder='Search...' 
    onChange={e => props.handleChangeSearch(e)}
    type="text"

      />
  );
};

export default Searchbar;
