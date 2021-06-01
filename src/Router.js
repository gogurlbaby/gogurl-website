import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './App.js';
import Login from './components/Login.js';
import Signup from './components/Signup';
import Dashboard from './components/dashboard.js';





const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/dashboard" component={Dashboard}/>
                <Route exact path="/" component={App}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
            </Switch>

        </Router>
    )
}

export default MainRouter;