import logo from './logo.svg';
import './App.css';
import HomePage from './customer/Pages/HomePage/HomePage';
import Navigation from './customer/components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <div>
        <Navigation/>
        <div>
          <HomePage/>
        </div>
      </div>
    </div>
  );
}

export default App;
