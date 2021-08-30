const BookForm = () => (
  <form>
    <input type="text" />
    <label htmlFor="category">
      Choose a category:
      <select name="category" id="category">
        <option value="Action">Action</option>
        <option value="Biography">Biography</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Kids">Kids</option>
        <option value="Learning">Learning</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
    </label>
    <button type="submit">Submit</button>
  </form>
);

export default BookForm;
