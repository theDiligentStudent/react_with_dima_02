import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Technologies />
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <p></p>
      <a>Home </a>
      <a> Message </a>
      <a> News </a>
    </div>
  );
};

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>react</li>
      </ul>
    </div>
  );
};

export default App;
