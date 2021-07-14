import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login'
import { Route, BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Switch>
          <Route exact path='/login'>
        <Login />
      </Route>
          <Route exact path=''>
          <Dashboard />
            </Route>  
      </Switch>
        </BrowserRouter>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
