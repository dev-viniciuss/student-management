import React from 'react';

import Header from '../../components/Header';

import { Container, Jumbotron, Form, Col, Card, Button } from 'react-bootstrap';

const RegisterCourse: React.FC = () => {
  return(
    <>
      <Header />
      <Container fluid>
        <Jumbotron className="jumbotronContainer">
          <h2 className="titleForm">Cadastre um curso</h2>
          <p className="descriptionForm">Cadastre um curso no sistema preenchendo todos os campos requisitados</p>
          <Card className="containerForm">
            <Card.Body>
              <Form>
                <Form.Row className="mb-2">
                  <Col>
                  <Form.Group>
                      <Form.Label className="labelInput"><strong>Código do curso</strong></Form.Label>
                      <Form.Control 
                        className="inputForm"
                        type="text" 
                        placeholder="Digite o código do curso" 
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="labelInput"><strong>Nome do curso</strong></Form.Label>
                      <Form.Control 
                        className="inputForm"
                        type="text" 
                        placeholder="Digite o nome do curso" 
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>

                <Form.Row className="mb-2">
                  <Col>
                    <Form.Group>
                      <Form.Label className="labelInput"><strong>Data de cadastro</strong></Form.Label>
                      <Form.Control className="inputForm" type="date" placeholder="Digite a data de cadastro do curso" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="labelInput"><strong>Carga horária</strong></Form.Label>
                      <Form.Control className="inputForm" type="number" placeholder="Digite a carga horária do curso" />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <hr/>
                <div className="buttonContainer">
                  <Button variant="primary">Cadastrar curso</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Jumbotron>
      </Container>
    </>
  );
};

export default RegisterCourse;