import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Book from '../../components/book/index';

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
            <Book key={book.id} obj={book} />
          ))
        }
      </tbody>
    </table>
  );
};

export default BooksList;
