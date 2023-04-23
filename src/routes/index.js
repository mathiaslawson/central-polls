import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';


const Routes = () => {
  return (
    <Switch>
      <PublicRoute path={ROUTES.SIGN_IN} component={SignInContainer} />
    </Switch >
  );
};

export default Routes;
