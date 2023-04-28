import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'
import PublicRoute from './PublicRoute.jsx';
import LoginContainer from '../containers/LoginContainer';




const Routes = () => {
  return (
    <Switch>
      <PublicRoute path={ROUTES.LOGIN} component={LoginContainer} />
      <PublicRoute path={ROUTES.HOME} component={Home} />
      <PublicRoute path={ROUTES.REGISTER} component={Register} />
    </Switch >
  );
};

export default Routes;
