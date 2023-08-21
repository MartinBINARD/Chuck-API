import chuck from '../../assets/chuck.svg';
import Widget from '../Widget/Widget';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={chuck} className="App-logo" alt="logo" />
      </header>
      <Widget />
    </div>
  );
}

export default App;
