import React from "react";

const SearchField = ({value, onChange}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
  )
}


export default SearchField