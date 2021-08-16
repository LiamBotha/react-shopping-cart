import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/shop' component={Shop}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
