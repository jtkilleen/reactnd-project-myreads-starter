import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookGrid from './BookGrid'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired,
    formattedCategory: PropTypes.string.isRequired
  }


  render() {
    const { books, category, formattedCategory } = this.props
    let shelf = books.filter((book) => book.shelf === category)
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{formattedCategory}</h2>
          <div className="bookshelf-books">
            <BookGrid books={shelf} moveBook={this.props.moveBook}/>
          </div>
        </div>
    )
  }
}

export default BookShelf
