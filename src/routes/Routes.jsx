import { Route, Switch, Redirect } from 'react-router-dom';
import DogList from '../components/dog-list/DogList';
import DogDetails from '../components/dog-details/DogDetails';

export default function Routes({ dogs }) {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route exact path="/dogs/:name">
        <DogDetails dogs={dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}
