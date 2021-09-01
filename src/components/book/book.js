import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { RemoveBook } from '../../actions';

const Book = (props) => {
  const { obj } = props;
  const { id, title, category } = obj;
  const dispatch = useDispatch();
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button type="button" onClick={() => dispatch(RemoveBook(obj))}>
          Remove Book
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  obj: propTypes.shape({
    id: propTypes.number,
    title: propTypes.string,
    category: propTypes.string,
  }).isRequired,
};

export default Book;
