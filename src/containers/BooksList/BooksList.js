/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Book from '../../components/book/index';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import './booklist.css';

const BooksList = () => {
  const [Books, setBooks] = useState([]);
  const list = useSelector(((state) => state.BookReducer));
  const filter = useSelector((state) => state.filterReducer);

  useEffect(() => {
    setBooks(list);
  }, [list]);
  return (
    <>
      <table className="table">
        <tbody>
          <tr><CategoryFilter /></tr>
          { filter === 'All' ? Books.map((book) => (<Book key={book.id} obj={book} />)) : Books.filter((book) => filter === book.category).map((book) => (<Book key={book.id} obj={book} />))}
        </tbody>
      </table>
    </>
  );
};

export default BooksList;
