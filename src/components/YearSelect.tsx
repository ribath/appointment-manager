import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory
} from 'react-router-dom';
import MonthSelect from './MonthSelect';

function YearSelect() {
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    history.push(`${url}/${year}/month`);
  }, []);

  function handleYearChange(event:any) {
    setYear(event.target.value);
    history.push(`${url}/${event.target.value}/month`);
  }

  return (
    <>
      <br />
      <Form.Group>
        <Form.Label>Select Year</Form.Label>
        <Form.Control
          as="select"
          value={year}
          onChange={(event:any) => { handleYearChange(event); }}
        >
            <option value={2019}>2019</option>
            <option value={2020}>2020</option>
            <option value={2021}>2021</option>
        </Form.Control>
      </Form.Group>
      <Switch>
        <Route path={`${path}/:year/month`}>
          <MonthSelect />
        </Route>
      </Switch>
      <br />
    </>
  );
}

export default YearSelect;
