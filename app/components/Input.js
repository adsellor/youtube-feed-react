import React from "react";

import {Context} from "../provider/Provider";
import { queryData } from "../api/Fetch";
import '../scss/input.scss'

const SearchBar = _ => {
  const handleChange = async (e, value) => {
    value.state.handleChange(e.target.value);
    let resulting = await queryData(value.state.queryParameters);
    value.state.storeData(resulting.items);
  };
  return (
    <Context.Consumer>
      {value => (
        <div className="input-wrapper">
          <input
            placeholder="type to start the search"
            onChange={e => handleChange(e, value)}
            value={value.state.inputValue}
          />
          <div className="button" onClick={() => value.changeLayout()}> Toggle View </div>
        </div>
      )}
    </Context.Consumer>
  );
};
export default SearchBar;
