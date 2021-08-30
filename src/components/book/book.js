const Book = (book, key) => {
  const { obj } = book;
  const { id, title, category } = obj;
  return (
    <tr>
      <td id={key}>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

export default Book;
