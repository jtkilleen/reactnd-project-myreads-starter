import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired,
    prettyCategory: PropTypes.string.isRequired
  }

  render() {
    const { books, category, prettyCategory} = this.props
    let bookShelf
    bookShelf = books.filter((book) => book.shelf === category)

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{prettyCategory}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookShelf.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url("+book.imageLinks.smallThumbnail+")" }}></div>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
