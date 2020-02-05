import React, { Component } from 'react';
import BooksAndMagazines from '../useCases/BooksAndMagazines'

function sortByTitle(a, b) {
  return a.title.localeCompare(b.title);
}

class All extends Component {
  constructor() {
    super();
    this.state = { books: [], magazines: []};
  }

  async componentDidMount() {
    const { sorted } = this.props
    const { books, magazines } = await BooksAndMagazines();
    if (sorted) {
      books.concat(magazines)
      books.sort(sortByTitle)
      this.setState({ books });
    } else {
      this.setState({ books, magazines });
    }
  }

  render() {
    const { books, magazines } = this.state
    const { sorted } = this.props
    if (sorted) {
      return (
        <div>
          <h1>Books</h1>
          <ul>
            {books.map(book => (
              <li key={book.isbn}>
                {book.title}: {book.isbn}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return (
      <div>
        <h1>Books</h1>
        <ul>
          {books.map(book => (
            <li key={book.isbn}>
              {book.title}: {book.isbn}
            </li>
          ))}
        </ul>
        <h1>Magazines</h1>
        <ul>
          {magazines.map(magazine => (
            <li key={magazine.isbn}>
              {magazine.title}: {magazine.isbn}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default All;
