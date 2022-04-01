import './App.css';
import Coments from './component/Coments';
import Likes from './component/Likes';
import Title from './component/Title';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Title />
            <Likes />
          </div>
          <Coments/>
        </div>
      </div>
    </div>
  );
}

export default App;
