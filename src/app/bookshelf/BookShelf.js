import React from "react";
import PropTypes from "prop-types";
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
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`,
                      }}
                    ></div>
                    <div className="book-shelf-changer">
                      <select
                        value={book.shelf}
                        onChange={(e) =>
                          onBookShelfChange(book, e.target.value)
                        }
                      >
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  {book.authors.map((author) => (
                    <div key={author} className="book-authors">
                      {author}
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
