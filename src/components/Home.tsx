import { useEffect } from 'react';
import {
  Switch,
  Route,
  useHistory
} from 'react-router-dom';
import YearSelect from './YearSelect';

function Home() {
  const history = useHistory();

  useEffect(() => {
    history.push('/year');
  }, []);

  return (
    <Switch>
        <Route path="/year" component={YearSelect} />
    </Switch>
  );
}

export default Home;
