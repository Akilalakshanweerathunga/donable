import { Route, Switch } from 'react-router-dom';
import ErrorPage from '../errors/errorPage.component';
import Login from '../login/login.component';
import Signup from '../signup/signup.component';
import AllCharities from '../charity/allCharities.component';
import SingleCharity from '../charity/singleCharity.component';

const LoginSignup = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <AllCharities />
      </Route>
      <Route path='/charity/:charity' component={SingleCharity} />
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='*'>
        <ErrorPage message='404 Page not found' />
      </Route>
    </Switch>
  );
};

export default LoginSignup;
