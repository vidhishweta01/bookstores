import BooksList from '../BooksList';
import BooksForm from '../../components/BookForm';
import Navbar from '../../components/navbar';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
