import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import Library from './Library'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     books: [],
     results: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState((state) => ({
        books: state.books.filter((b) => b.id !== book.id)
      }))

      book.shelf = shelf
      this.setState((state) => ({
        books: state.books.concat(book)
      }))
    })
  }

  showBooks = (query) => {
    BooksAPI.search(query, 20).then((results) => {
      if(results.items) {
        this.setState({ results: [] })
      }
      else {
        for(let book of this.state.books) {
          results.map(b => {
            if (book.id === b.id) {
              b.shelf = book.shelf
            }
            return b
          })
        }
        this.setState({ results })
      }
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Library books={this.state.books} results={this.state.results} showBooks={this.showBooks}
            moveBook={this.moveBook}/>
        )}/>
        <Route exact path="/" render={() => (
                <BookShelf
                  books={this.state.books}
                  moveBook={this.moveBook}
                />
        )}/>
      </div>
    )
  }
}

export default BooksApp
