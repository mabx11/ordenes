import React, { Component } from "react";
import { Typography } from "@mui/material";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Field, reduxForm } from "redux-form";
import Button from "react-bootstrap/Button";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Chip from "@mui/material/Chip";
//import ListExams from "../exams/ListExams";
import ListBoxA from "./ListBoxA";
import "./App.css";
import { borderRadius } from "@mui/system";

class guardarOrden extends Component {
  state = {
    paciente: [],
    tipoorden: [],
    medico: [],
    tiposervicio: [],
  };

  /* componentDidMount(){
    this.consultarOrden();  
  } */

  /* consultarOrden = async () =>{
    
    const url = `https://localhost:44385/api/Pacientes`;
    const url2 = `https://localhost:44385/api/TipoOrden`;
    const url3 = `https://localhost:44385/api/Medicos`;
    const url4 = `https://localhost:44385/api/TipoServicio`;

    const respuesta = await fetch(url);
    const respuesta2 = await fetch(url2);
    const respuesta3 = await fetch(url3);
    const respuesta4 = await fetch(url4);

    const paciente = await respuesta.json();
    const tipoorden = await respuesta2.json();
    const medico = await respuesta3.json();
    const tiposervicio = await respuesta4.json();

    
    
    
    this.setState({
      paciente: paciente,
      tipoorden: tipoorden,
      medico: medico,
      tiposervicio: tiposervicio,
    
    });
  } */

  render() {
    return (
      <Card style={{ background: "#0085BD", padding: "2em", border: "none" }}>
        <Card.Header
          style={{
            textAlign: "center",
            background: "#102444",
            borderRadius: "40px",
          }}
        >
          <Row style={{ textAlign: "center" }}>
            <Col style={{ textAlign: "center" }}>
              <Typography
                style={{ textAlign: "center", color: "#D6EEEB" }}
                variant="h5"
              >
                REGISTRO DE NUEVA ORDEN
              </Typography>
            </Col>

            {/* <Col>
              <Chip icon={<DateRangeIcon/>} label='29/11/2021'/>
            </Col> */}
          </Row>
        </Card.Header>

        <br></br>

        <Card.Body style={{ borderRadius: "20px", backgroundColor: "#D6EEEB" }}>
          <Form style={{ textAlign: "left" }}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridOrder">
                <Form.Label>
                  <h5>Cod. Orden:</h5>
                </Form.Label>
                <Form.Control
                  style={{ background: "#373737", color: "white" }}
                  value="021221001"
                  type="text"
                  disabled="true"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  <h5>Paciente:</h5>
                </Form.Label>
                <Form.Select defaultValue="Seleccione...">
                  <option>Seleccione...</option>

                  {/* {this.state.paciente.map((pat) => (
                  <option
                    key={pat.idPaciente}
                    value={pat.idPaciente}
                  >
                    {pat.primerNombre + ' ' + pat.segundoNombre + ' ' + pat.primerApellido + ' '  + pat.segundoApellido}
                  </option>
                ))} */}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  <h5>Tipo de Orden:</h5>
                </Form.Label>
                <Form.Select defaultValue="Seleccione...">
                  <option>Seleccione...</option>
                  {/* {this.state.tipoorden.map((tor) => (
                  <option
                    key={tor.idTipoOrden}
                    value={tor.idTipoOrden}
                  >
                    {tor.descripcion}
                  </option>
                ))} */}
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  <h5>Tipo de Servicio:</h5>
                </Form.Label>
                <Form.Select defaultValue="Seleccione...">
                  <option>Seleccione...</option>
                  {/* {this.state.tiposervicio.map((tser) => (
                  <option
                    key={tser.idTipoServicioOrden}
                    value={tser.idTipoServicio}
                  >
                    {tser.descripcion}
                  </option>
                ))} */}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  <h5>Médico:</h5>
                </Form.Label>
                <Form.Select defaultValue="Seleccione...">
                  <option>Seleccione...</option>

                  {/* {this.state.medico.map((med) => (
                  <option
                    key={med.idTblMedico}
                    value={med.idTblMedico}
                  >
                    {med.nombres + ' ' + med.apellidos}
                  </option>
                ))} */}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  <h5>Asistencia:</h5>
                </Form.Label>
                <Form.Select defaultValue="Seleccione...">
                  <option>Seleccione...</option>
                  <option>Si</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Card className="mb-3">
              <Card.Header>
                <Typography variant="h6">Lista de exámenes</Typography>
              </Card.Header>
              <Card.Body style={{ background: "#f5f5f5" }}>
                <ListBoxA></ListBoxA>
              </Card.Body>
            </Card>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <h5>Observaciones:</h5>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                style={{ background: "#f5f5f5" }}
              />
            </Form.Group>

            <Form.Group style={{ textAlign: "center" }}>
              <Button
                style={{ background: "#009665", border: "none" }}
                type="submit"
              >
                Guardar orden
              </Button>
              &nbsp;&nbsp;
              <Button
                style={{ background: "#FF5F5F", border: "none" }}
                type="reset"
              >
                Cancelar
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default guardarOrden;
