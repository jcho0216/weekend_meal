import { Switch, Route } from "react-router-dom";
import Meal from '../component/Meal/Meal';
import Login from '../component/Login/Login';

const MainRouter = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Meal} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
};

export default MainRouter;