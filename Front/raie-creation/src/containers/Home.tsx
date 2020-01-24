

import React from 'react'
import Header from '../components/Header';
import Register from '../components/form/Register';
import Login from '../components/form/Login';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useLocation
} from "react-router-dom";

const Home: React.FC = () => {
    let { path, url } = useRouteMatch();
    console.log(path, url);
    let location = useLocation();
    console.log(location);
    
    return(
        <div>
            <Header />
            <Switch>
                <Route exact path={path}>
                    <Link to={`${url}/login`}>Login</Link>
                    <Link to={`${url}/register`}>Register</Link>
                </Route>
                <Route path={`${path}/login`} children={ <Login />}/>
                <Route path={`${path}/register`} children={ <Register/>}/>
            </Switch>
        </div>
    )
}
export default Home;