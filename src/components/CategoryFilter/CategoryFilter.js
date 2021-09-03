import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ChangeFilter } from '../../actions/index';
import './categoryFilter.css';

const CategoryFilter = () => {
  const [filter, setFilter] = useState('All');
  const dispatch = useDispatch();
  return (
    <>
      <label htmlFor="filter">
        <select className="select" name="filter" id="filter" onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All">All</option>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </label>
      <button className="btn" type="button" onClick={() => dispatch(ChangeFilter(filter))}>Apply Filter</button>
    </>
  );
};

export default CategoryFilter;
