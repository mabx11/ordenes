import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Form.Group as={Col} controlId="formGridState">
        <Form.Label><h5>Fecha de cita:</h5></Form.Label>
        <DatePicker className="form-control" dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
    </Form.Group>
    
  );
};

export default Calendar;