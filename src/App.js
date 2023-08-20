
import { Provider } from 'react-redux';
import './App.css';
import MovieComp from './components/MovieComp';
import movieStore from './Redux/store';
import Search from './components/moviecard';

function App() {
  return (
  <div className='main'>
  <Provider store={movieStore}>
     <MovieComp  />
  </Provider>
  </div>
  );
}

export default App;
