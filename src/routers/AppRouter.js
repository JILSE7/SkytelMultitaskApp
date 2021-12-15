
//Views
import Login from '../views/Login'
import Home from '../views/Home';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



const AppRouter = () => {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL} >
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter