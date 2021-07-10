/* eslint-disable eqeqeq */
import { useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import Appointment from '../interfaces/Appointment';
import { useAppSelector } from '../redux/hooks';
import { getFormattedDate } from '../utilities/helper';
import { DayCol, AppointmentsContainer } from './styled/Containers';
import { DayHeader, AppointmentHeader } from './styled/Elements';

function DayBox(props:any) {
  const { day } = props;
  const { month } = props;
  const { year } = props;

  const appState = useAppSelector((state) => state.appState);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Appointment>();

  const appointments: Appointment[] = appState.filter((appointment) => (
    appointment.day == day
    && appointment.month == month
    && appointment.year == year
  ));

  const handleShowModal = (item:Appointment) => {
    setShowModal(true);
    setSelectedItem(item);
  };

  const handleCloseModal = () => setShowModal(false);

  const modal = () => (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
            <Modal.Title>Appointment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td><b>Name</b></td>
                <td>{selectedItem !== undefined ? selectedItem.name : ''}</td>
              </tr>
              <tr>
                <td><b>Age</b></td>
                <td>{selectedItem !== undefined ? selectedItem.age : ''}</td>
              </tr>
              <tr>
                <td><b>Sex</b></td>
                <td>{selectedItem !== undefined ? selectedItem.sex : ''}</td>
              </tr>
              <tr>
                <td><b>Date</b></td>
                <td>{selectedItem !== undefined ? getFormattedDate(day, month, year) : ''}</td>
              </tr>
              <tr>
                <td><b>Time</b></td>
                <td>{selectedItem !== undefined ? selectedItem.time : ''}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
                Close
            </Button>
        </Modal.Footer>
      </Modal>
  );

  return (
    <DayCol lg={2} sm={4} xs={6}>
        {modal()}
        <DayHeader>{day}</DayHeader>
        <AppointmentsContainer>
          {
            appointments.map((appointment) => (
                <AppointmentHeader onClick={() => handleShowModal(appointment)}>
                  {appointment.name}
                </AppointmentHeader>
            ))
          }
        </AppointmentsContainer>
    </DayCol>
  );
}

export default DayBox;
