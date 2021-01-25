import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Sidebar/>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
