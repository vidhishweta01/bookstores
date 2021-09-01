import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Book from '../../components/book/index';
import { REMOVE_BOOK } from '../../actions';
import store from '../../reducers/index';

const BooksList = () => {
  const [Books, setBooks] = useState([]);
  const list = useSelector(((state) => state.BookReducer));

  useEffect(() => {
    setBooks(list);
  }, [list]);
  return (
    <table>
      <tbody>
        {
          Books.map((book) => (
            <Book key={book.id} obj={book} button={<button type="button" onClick={() => store.dispatch(REMOVE_BOOK(book))}>Remove Book</button>} />
          ))
        }
      </tbody>
    </table>
  );
};

export default BooksList;