import logo from './logo.svg';
import './App.css';
import MultiButton from './cgu_multiButton'
import HelloCGU from './cgu_hello';

const styleArgument = {
  color: 'red',
  cursor: 'pointer',
  fontSize: '2rem'
};

function App() {
  return (
    <div className="App">
      {HelloCGU()}
      {MultiButton(10)}
    </div>
  );
}

export default App;
