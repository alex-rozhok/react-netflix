import React from "react";
import "./App.css"
import Counter from "./components/Counter";
import Filter from "./components/Filter";
import Search from "./components/Search";
import Title from "./components/Title";

function App() {

  return (
    <div className="container">
      <Title
        title="Task 1. Creating React components" />
        
      <Counter />
      <Search />
      <Filter />
    </div>
  );
}

export default App;
