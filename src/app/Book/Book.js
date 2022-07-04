import React from "react";
import PropTypes from "prop-types";
import "./Book.css";

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onBookShelfChange: PropTypes.func.isRequired,
  };

  render() {
    const { book, onBookShelfChange } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks ? book.imageLinks.thumbnail : ""
              })`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={book.shelf ? book.shelf : "none"}
              onChange={(e) => onBookShelfChange(book, e.target.value)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.author
          ? book.authors.map((author) => (
              <div key={author} className="book-authors">
                {author}
              </div>
            ))
          : ""}
      </div>
    );
  }
}

export default Book;
