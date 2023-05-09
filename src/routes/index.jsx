import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Home from '../pages/Home'
import Candidates from '../pages/Candidates'
import CandidateDetails from '../pages/CandidateDetails'
import PublicRoute from './PublicRoute.jsx';
import PrivateRoute from './PrivateRoute';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';
import CandidatesContainer from '../containers/CandidatesContainer';
import CandidateDetialsContainer from '../containers/CandidateDetailsContainer'
import Vote from '../pages/Vote'
import VoteContainer from '../containers/VoteContainer'




const Routes = () => {
  return (
    <Switch>
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
