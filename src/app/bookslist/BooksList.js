import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "../bookshelf/BookShelf";
import * as BooksAPI from "../../api/BooksAPI";
import "./BooksList.css";

class BooksList extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books,
      });
    });
  }

  getBooksInBookShelf(bookshelfName) {
    return this.state.books.filter((book) => book.shelf === bookshelfName);
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              books={this.getBooksInBookShelf("currentlyReading")}
              shelf="Currently Reading"
            />
            <BookShelf
              books={this.getBooksInBookShelf("wantToRead")}
              shelf="Want to Read"
            />
            <BookShelf books={this.getBooksInBookShelf("read")} shelf="Read" />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BooksList;
