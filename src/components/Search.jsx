import React, { useState } from "react";
import Button from "./Button";
import SearchField from "./SearchField";

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const changeHandler = e => {
    setSearchValue(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
  }

  return (
    <form className="form row">
      <SearchField
        value={searchValue}
        onChange={changeHandler}
      />
      <Button
        type="submit"
        onClick={submit}
      >search</Button>
    </form>
  )
}