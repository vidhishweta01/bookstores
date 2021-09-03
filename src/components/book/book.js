import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { RemoveBook } from '../../actions';
import './book.css';

const Book = (props) => {
  const { obj } = props;
  const { id, title, category } = obj;
  const dispatch = useDispatch();
  return (
    <tr key={id} className="card">
      <div className="flexColumn">
        <td className="category">{category}</td>
        <td className="title">{title}</td>
        <td>
          <button className="Remove" type="button" onClick={() => dispatch(RemoveBook(obj))}>
            Remove
          </button>
        </td>
      </div>
      <div className="flexRow ui_continer">
        <div className="flexRow">
          <div className="Oval-2" />
          <div className="flexColumn">
            <span className="percent-Complete">64%</span>
            <span className="completed">completed</span>
          </div>
        </div>
        <div className="border" />
        <div className="flexColumn">
          <span className="Current-Chapter ">CURRENT CHAPTER</span>
          <span className="Current-Lesson">Chapter 17</span>
          <button className="Rectangle-2" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
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
