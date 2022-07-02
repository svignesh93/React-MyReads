import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import BooksList from "./bookslist/BooksList";
import Search from "./search/Search";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Routes>
          <Route exact path="/" element={<BooksList />} />
          <Route exact path="search" element={<Search />} />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
