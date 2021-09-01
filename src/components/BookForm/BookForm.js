import { useState } from 'react';
import { CREATE_BOOK } from '../../actions/index';
import store from '../../reducers/index';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');
  const [id, setId] = useState(4);

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChagneCategory = (e) => setCategory(e.target.value);

  return (
    <div>
      <input type="text" onChange={(e) => handleChangeTitle(e)} value={title} />
      <label htmlFor="category">
        Choose a category:
        <select name="category" id="category" onChange={(e) => handleChagneCategory(e)} value={category}>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </label>
      <button
        type="submit"
        onClick={() => {
          store.dispatch(CREATE_BOOK({ id, title, category }));
          setId(id + 1);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default BookForm;
