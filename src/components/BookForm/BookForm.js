import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CreateBook } from '../../actions/index';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChagneCategory = (e) => setCategory(e.target.value);

  const dispatch = useDispatch();

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
          dispatch(CreateBook({ id: uuidv4(), title, category }));
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default BookForm;
