/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
const Book = (book, key) => {
  const { id, title, category } = book.obj;
  return (
    <tr>
      <td id={key}>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

export default Book;
