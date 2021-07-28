import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import NotFound from '../components/notFound';
import routes from '../constants/routes';
import dashboard from '../views/dashboard';
import login from '../views/login';


const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={routes.HOME}>
                    <Redirect to={routes.LOGIN} />
                </Route>
                <Route
                    exact
                    path={routes.LOGIN}
                    component={login}
                />
                <Route
                    exact
                    path={routes.DASHBOARD}
                    component={dashboard}
                />
                <Route
                    component={NotFound}
                />

            </Switch>
        </Router>
    )
}

export default AppRoutes;