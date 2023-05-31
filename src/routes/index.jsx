import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Home from '../pages/Home'
import PublicRoute from './PublicRoute.jsx';
import PrivateRoute from './PrivateRoute';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';
import CandidatesContainer from '../containers/CandidatesContainer';
import CandidateDetialsContainer from '../containers/CandidateDetailsContainer'
import VoteContainer from '../containers/VoteContainer'
import VoteComplete from '../pages/VoteComplete'
import ConfirmPasswordContainer from '../containers/ConfirmPasssword'
import TestRegister from '../pages/TestRegister'
import Results from '../pages/Results'



const Routes = () => {
  return (
    <Switch>
      <PublicRoute path='/test' component={TestRegister}></PublicRoute>
      <PublicRoute path='/confirm' component={ConfirmPasswordContainer}></PublicRoute>
      <PrivateRoute path='/results' component={Results}></PrivateRoute>
      <PrivateRoute path={ROUTES.VOTE_COMPLETE} component={VoteComplete}></PrivateRoute>
      <PrivateRoute path={ROUTES.VOTE} component={VoteContainer}></PrivateRoute>
      <PrivateRoute path={ROUTES.CANDIDATES_DETAILS} component={CandidateDetialsContainer}></PrivateRoute>
      <PrivateRoute path={ROUTES.CANDIDATES} component={CandidatesContainer} />
      <PublicRoute path={ROUTES.REGISTER} component={RegisterContainer} />
      <PublicRoute path={ROUTES.LOGIN} component={LoginContainer} />
      <PublicRoute path={ROUTES.HOME} component={Home} /> 
    </Switch >
  );
};

export default Routes;
