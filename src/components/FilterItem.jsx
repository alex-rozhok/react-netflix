import React from "react";
import Button from "./Button";

export default function FilterItem({genre, setActiveGenre}) {
  return (
    <li
      className={`filter__item ${genre.active ? 'active' : ''}`}
    >
      <Button
        onClick={()=> setActiveGenre(genre.name)}
      >{genre.name}</Button>
    </li>
  )
}