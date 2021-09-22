import { Switch, Route } from "react-router-dom";
import Meal from "../component/Meal/Meal";

const MainRouter = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Meal} />
      </Switch>
    </>
  );
};

export default MainRouter;
