import propTypes from 'prop-types';

const Book = (props) => {
  const { obj, button } = props;
  const { id, title, category } = obj;

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>{button}</td>
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

Book.propTypes = {
  button: propTypes.shape({
    type: propTypes.string,
  }).isRequired,
};

export default Book;