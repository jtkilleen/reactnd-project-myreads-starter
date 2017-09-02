import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BookGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props
    return (
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ backgroundImage: "url("+book.imageLinks.thumbnail+")" }}></div>
                <div className="book-shelf-changer">
                  <select defaultValue={book.shelf || "none"} onChange={(event) => this.props.moveBook(book,event.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors? book.authors.join(', '): ''}</div>
            </div>
          </li>
        ))}
      </ol>
    )
  }
}
export default BookGrid
