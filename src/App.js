import './App.css';
import Coments from './component/Coments';
import Likes from './component/Likes';
import Title from './component/Title';
import Spiner from './component/Spiner';
import { useSelector } from 'react-redux';
import { loadingReduser } from './redux/loaderReduse';


function App() {

  const error = useSelector(state => state.loadingReduser.error)

  console.log(error)
  return (
    <div className="App" >
      <div className="wrap">
        <Spiner />
        <div className="card">
          {error && (
            <div className='error-message'>
              {error}
            </div>
          )}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Title />
            <Likes />
          </div>
          <Coments />
        </div>
      </div>
    </div>
  );
}

export default App;
