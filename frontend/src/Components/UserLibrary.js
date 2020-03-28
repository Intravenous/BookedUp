import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'
import LibraryBookCard from './LibraryBookCard'

class UserLibrary extends React.Component {

  constructor() {
    super()
    this.state = {
      books: null
    }
  }

  componentDidMount() {
    axios.get('/api/mylibrary', { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then(res => this.setState({ books: res.data }))
      .catch(err => this.setState({ error: err.response.data.message }))
  }

  render() {
    console.log(this.state.books)
    if (!this.state.books) return <h1>WAITING FOR BOOKS</h1>

    return <main className="mainLibraryBookCard">
      <section className="BooksIndex">
        <div className="section">
          <div className="container">
            <div className="columns is-multiline is-mobile">

              {this.state.books.map((book, index) => {
                return <LibraryBookCard book={book} key={index} />

              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  }

}

export default UserLibrary