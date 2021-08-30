/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
import propTypes from 'prop-types';

const Book = (book) => {
  const { obj } = book;
  const { id, title, category } = obj;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  book: propTypes.object.isRequired,
};

export default Book;
