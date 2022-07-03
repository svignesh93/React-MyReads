import React from "react";
import PropTypes from "prop-types";
import Book from "../Book/Book";
import "./BookShelf.css";

class BookShelf extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    onBookShelfChange: PropTypes.func.isRequired,
  };

  render() {
    const { books, shelf, onBookShelfChange } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book book={book} onBookShelfChange={onBookShelfChange} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
