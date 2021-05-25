import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './App.js';
import Login from './components/Login.js';
import Signup from './components/Signup';





const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={App}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
            </Switch>

        </Router>
    )
}

export default MainRouter;