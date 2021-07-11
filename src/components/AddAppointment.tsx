import { useState } from 'react';
import { Button, Row, Col, Modal, Form } from 'react-bootstrap';
import MomentUtils from '@date-io/moment';
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import { useAppDispatch } from '../redux/hooks';
import { addAppointment } from '../redux/appoinmentSlice';
import Appointment from '../interfaces/Appointment';
import Calender from './Calender';

function AddAppointment() {
  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState(10);
  const [sex, setSex] = useState('Male');
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<Date | null>(new Date());

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setName('');
    setAge(10);
    setSex('male');
    setSelectedDate(new Date());
    setSelectedTime(new Date());
  };

  const handleSubmit = () => {
    if (name !== '' && selectedDate !== null && selectedTime !== null) {
      const appointment:Appointment = {
        name,
        age,
        sex,
        day: selectedDate?.getDate(),
        month: selectedDate?.getMonth() + 1,
        year: selectedDate?.getFullYear(),
        time: selectedTime.toLocaleTimeString()
      };
      dispatch(addAppointment(appointment));
      handleCloseModal();
    } else {
      alert('Set Name Please');
    }
  };

  const form = () => (
    <Form>
        <Form.Group>
            <Form.Label>Patient Name *</Form.Label>
            <Form.Control
                name="name"
                placeholder="Enter Name"
                value={name}
                onChange={(event:any) => { setName(event.target.value); }}
                required
            />
        </Form.Group>

        <Row>
            <Col md={6}>
                <Form.Group>
                    <Form.Label>Age *</Form.Label>
                    <Form.Control
                        name="age"
                        type="number"
                        value={age}
                        onChange={(event:any) => { setAge(event.target.value); }}
                        required
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group>
                    <Form.Label>Sex *</Form.Label>
                    <Form.Control
                        name="sex"
                        as="select"
                        defaultValue="Male"
                        value={sex}
                        onChange={(event:any) => { setSex(event.target.value); }}
                        required
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Control>
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                    minDate={new Date('January 1, 2019')}
                    maxDate={new Date('December 31, 2021')}
                    value={selectedDate}
                    label="Select Date"
                    onChange={(newDate) => {
                      if (newDate != null) setSelectedDate(newDate.toDate());
                    }}
                />
            </MuiPickersUtilsProvider>
            </Col>
            <Col md={6}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <TimePicker
                    value={selectedTime}
                    label="Select Time"
                    onChange={(newTime) => {
                      if (newTime != null) setSelectedTime(newTime.toDate());
                    }}
                />
            </MuiPickersUtilsProvider>
            </Col>
        </Row>
    </Form>
  );

  const modal = () => (
    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
            <Modal.Title>Add Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {form()}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
                Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
                Save
            </Button>
        </Modal.Footer>
    </Modal>
  );

  return (
      <>
        {modal()}
        <Button onClick={handleShowModal}>
            Create New Appointment
        </Button>
        <Calender />
      </>
  );
}

export default AddAppointment;
