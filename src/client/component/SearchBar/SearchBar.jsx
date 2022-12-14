import React, { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    reset();
  };

  const reset = () => {
    setQuery("");
  };

  return (
    <div className="search">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="button" className="SearchForm-button">
          <span className="SearchForm-button-label"></span>
        </button>
        <input
          className="SearchForm-input 
        "
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search Films"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
