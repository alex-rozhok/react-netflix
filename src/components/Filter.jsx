import React, { useEffect, useState } from "react";
import FilterItem from "./FilterItem";



export default function Filter() {
  const [genres, setGenres] = useState([
    { name: 'All', active: false },
    { name: 'Documentary', active: false },
    { name: 'Comedy', active: false },
    { name: 'Horror', active: false },
    { name: 'Crime', active: false },
  ]);
  const [activeGenre, setActiveGenre] = useState('All');
  
  useEffect(() => {
    setGenres(
      genres.map(genre => {
        return genre.name === activeGenre ? { ...genre, active: true } : { ...genre, active: false }
      })
    )
  }, [activeGenre])

  return (
    <ul className="grid">
      {genres.map(genre => <FilterItem key={genre.name} genre={genre} setActiveGenre={setActiveGenre} />)}
    </ul>
  )
}