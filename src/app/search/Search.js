import React from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import Book from "../Book/Book";
import * as BooksAPI from "../../api/BooksAPI";
import "./Search.css";

class Search extends React.Component {
  state = {
    query: "",
    searchedBooks: [],
  };

  changeBookShelf = (book, bookShelfName) => {
    BooksAPI.update(book, bookShelfName).then(() => {
      book.shelf = bookShelfName;

      this.setState((currentState) => ({
        searchedBooks: currentState.searchedBooks.map((b) => {
          if (b.id === book.id) {
            return book;
          }
          return b;
        }),
      }));
    });
  };

  searchBooks = debounce((query) => {
    if (query === "") {
      this.setState(() => ({
        searchedBooks: [],
      }));
      return;
    }

    BooksAPI.search(query)
      .then((books) => {
        this.setState(() => ({
          searchedBooks: books.length > 0 ? books : [],
        }));
      })
      .catch(() => {
        this.setState(() => ({
          searchedBooks: [],
        }));
      });
  }, 500);

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim(),
    }));

    this.searchBooks.cancel();
    this.searchBooks(query);
  };

  render() {
    const { query, searchedBooks } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
            <input
              type="text"
              value={query}
              placeholder="Search by title or author"
              onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.map((book) => (
              <li key={book.id}>
                <Book book={book} onBookShelfChange={this.changeBookShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
