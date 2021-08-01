import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import NotFound from '../components/notFound';
import routes from '../constants/routes';
import { isLoggedIn } from '../helpers/authenticationChecker';
import dashboard from '../views/dashboard';
import login from '../views/login';


const PrivateRoute = ({
    component: Component,
    redirectPath,
    location,
    ...rest
  }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          isLoggedIn() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: redirectPath,
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  };

// main frontend router handling here
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
                <PrivateRoute
                    exact
                    path={routes.DASHBOARD}
                    redirectPath={routes.LOGIN}
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