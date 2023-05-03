import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Home from '../pages/Home'
import Candidates from '../pages/Candidates'
import PublicRoute from './PublicRoute.jsx';
import PrivateRoute from './PrivateRoute';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';




const Routes = () => {
  return (
    <Switch>
      <PrivateRoute path={ROUTES.CANDIDATES} component={Candidates} />
      <PublicRoute path={ROUTES.REGISTER} component={RegisterContainer} />
      <PublicRoute path={ROUTES.LOGIN} component={LoginContainer} />
      <PublicRoute path={ROUTES.HOME} component={Home} /> 
    </Switch >
  );
};

export default Routes;
