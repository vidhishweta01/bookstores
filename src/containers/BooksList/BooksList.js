/* eslint-disable no-console */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Book from '../../components/book/index';

const BooksList = () => {
  const [Books] = useState(useSelector(((state) => state)));
  return (
    <table>
      <tbody>
        {Books.map((book) => (
          <Book obj={book} key={book.id} />
        ))}
      </tbody>
    </table>
  );
};

export default BooksList;
