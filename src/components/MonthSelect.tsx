import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  useParams
} from 'react-router-dom';
import Calender from './Calender';

function MonthSelect() {
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const { year } = useParams<Record<string, string>>();

  useEffect(() => {
    history.push(`${url}/${month}`);
  }, [year, url]);

  function handleMonthChange(event:any) {
    setMonth(event.target.value);
    history.push(`${url}/${event.target.value}`);
  }

  return (
    <>
        <Form.Group>
          <Form.Label>Select Month</Form.Label>
          <Form.Control
            as="select"
            value={month}
            onChange={(event:any) => { handleMonthChange(event); }}
          >
            <option value={1}>January</option>
            <option value={2}>February</option>
            <option value={3}>March</option>
            <option value={4}>April</option>
            <option value={5}>May</option>
            <option value={6}>June</option>
            <option value={7}>July</option>
            <option value={8}>August</option>
            <option value={9}>September</option>
            <option value={10}>October</option>
            <option value={11}>November</option>
            <option value={12}>December</option>
          </Form.Control>
        </Form.Group>
        <Switch>
          <Route path={`${path}/:month`}>
            <Calender />
          </Route>
        </Switch>
    </>
  );
}

export default MonthSelect;
