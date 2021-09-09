import Form from './components/Form/Form';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import { AppProvider } from './context/context';
import SingleApplication from './components/SingleApplication/SingleApplication';
import ApplicationCode from './components/ApplicationCode/ApplicationCode';
import ApplicationQuery from './components/ApplicationQuery/ApplicationQuery';
import Application from './components/Application/Application';
import AdminAuth from './components/AdminAuth/AdminAuth';
import Error from './components/Error/Error';

function App() {
  return (
    <div className='App'>
      <AppProvider>
        <Router>
          <Switch>
            <Route path='/basvuru-sorgula' component={ApplicationQuery} />
            <Route exact path='/basvuru/basarili' component={ApplicationCode} />
            <Route path='/basvuru/:id' component={Application} />
            <Route path='/basvuru' component={Form} />
            <Route path='/admin/basvuru/:id' component={SingleApplication} />
            <Route path='/admin/basvuru' component={Admin} />
            <Route path='/admin' component={AdminAuth} />
            <Route exact path='/' component={Home} />
            <Route path='*' component={Error} />
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
