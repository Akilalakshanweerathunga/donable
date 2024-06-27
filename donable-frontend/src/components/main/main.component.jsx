import { Redirect, Route, Switch } from 'react-router-dom';
import AllCharities from '../charity/allCharities.component';
import DonatedCharities from '../charity/donatedCharities.component';
import SingleCharity from '../charity/singleCharity.component';
import UserProfile from '../userProfile/userProfile.component';
import AboutUs from '../about/aboutUs.component';
import ContactUs from '../about/contactUs.component';
import Career from '../about/career.component';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <AllCharities />
      </Route>
      <Route exact path='/my-charities'>
        <DonatedCharities />
      </Route>
      <Route path='/me'>
        <UserProfile />
      </Route>
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/contactus" component={ContactUs} />
      <Route path="/career" component={Career} />
      <Route path='/charity/:charity' component={SingleCharity} />
      <Redirect to='/' />
    </Switch>
  );
};

export default Main;
