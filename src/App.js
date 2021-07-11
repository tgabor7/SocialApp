import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <main>
        <div className='navbar is-fixed-top p-4 '>
          <i className='is-size-2 fa fa-home pr-4'></i>
          <h1 className='is-size-4 has-text-weight-bold'>SocialApp</h1>
        </div>
      <Dashboard />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
