import logo from './logo.svg';
import './App.css';
import Hello01 from './hello01/Hello01';

const name = "홍길동";

function App() {
  return (
    <div>
      <Hello01/>
      <div>안녕</div>
      <h2>{name}</h2>
    </div>
  );
}

export default App;
