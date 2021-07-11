import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { getNumDaysInMonth } from '../utilities/helper';
import { CalenderContainer } from './styled/Containers';
import DayBox from './DayBox';

function Calender() {
  const { year } = useParams<Record<string, string>>();
  const { month } = useParams<Record<string, string>>();
  const days = getNumDaysInMonth(parseInt(month, 10), parseInt(year, 10));

  return (
    <CalenderContainer>
        <Row>
            <DayBox day={1} month={month} year={year} />
            <DayBox day={2} month={month} year={year} />
            <DayBox day={3} month={month} year={year} />
            <DayBox day={4} month={month} year={year} />
            <DayBox day={5} month={month} year={year} />
            <DayBox day={6} month={month} year={year} />
        </Row>

        <Row>
            <DayBox day={7} month={month} year={year} />
            <DayBox day={8} month={month} year={year} />
            <DayBox day={9} month={month} year={year} />
            <DayBox day={10} month={month} year={year} />
            <DayBox day={11} month={month} year={year} />
            <DayBox day={12} month={month} year={year} />
        </Row>

        <Row>
            <DayBox day={13} month={month} year={year} />
            <DayBox day={14} month={month} year={year} />
            <DayBox day={15} month={month} year={year} />
            <DayBox day={16} month={month} year={year} />
            <DayBox day={17} month={month} year={year} />
            <DayBox day={18} month={month} year={year} />
        </Row>

        <Row>
            <DayBox day={19} month={month} year={year} />
            <DayBox day={20} month={month} year={year} />
            <DayBox day={21} month={month} year={year} />
            <DayBox day={22} month={month} year={year} />
            <DayBox day={23} month={month} year={year} />
            <DayBox day={24} month={month} year={year} />
        </Row>

        <Row>
            <DayBox day={25} month={month} year={year} />
            <DayBox day={26} month={month} year={year} />
            <DayBox day={27} month={month} year={year} />
            <DayBox day={28} month={month} year={year} />
            {
                (days >= 29)
                && <DayBox day={29} month={month} year={year} />
            }
            {
                (days >= 30)
                && <DayBox day={30} month={month} year={year} />
            }
        </Row>

        <Row>
            {
                (days === 31)
                && <DayBox day={31} month={month} year={year} />
            }
        </Row>

    </CalenderContainer>
  );
}

export default Calender;
