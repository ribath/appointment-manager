import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const DayCol = styled(Col)`
  height: 130px;
  padding-left: 0px;
  padding-right: 0px;
  border-style: solid;
  border-width: 1px;
`;

export const CalenderContainer = styled.div`
  padding: 14px;
`;

export const AppointmentsContainer = styled.div`
  height: 75px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 15px;
  overflow: auto;
`;
