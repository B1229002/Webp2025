import logo from './logo.svg';
import './App.css';

const styleArgument = {
  color: 'red',
  cursor: 'pointer',
  fontSize: '2rem'
};

const changeText = (event) => {
  console.log(event.target);
  event.target.innerText = event.target.innerText + " 被點了";
};

function App() {
  return (
    <div className="App">
      <h1 style={styleArgument} onClick={changeText}>
        hello CGU!!
      </h1>
    </div>
  );
}

export default App;
