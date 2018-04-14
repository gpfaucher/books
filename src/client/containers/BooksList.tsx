import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getBooks } from '../actions/books';
import Book from '../components/Book';
import BooksForm from './BooksForm';

class BooksList extends React.Component {
    public componentDidMount() {
        this.props.getBooks();
    }
    public render() {
        const books = this.props.books.map((book) => (
            <Book
                title={book.title}
                key={book.id}
                description={book.description}
                price={book.price}
            />
        ));
        return (
            <div>
                {books}
                <BooksForm />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getBooks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
