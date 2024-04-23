import './App.css';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom';


const App=()=>{
  return (
    <div className='app-container'>
     <Header></Header>
     <div>
      test Link
      <div>
        <button>
          <Link to="/admin">go to admin page</Link>
        </button>
        <button>
          <Link to="/user">go to user page</Link>
        </button>
      </div>
     </div>
    </div>
  )
}

export default App;
