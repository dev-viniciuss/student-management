import React from 'react';

import Header from '../../components/Header';

import { Container, Jumbotron, Form, Col, Card, Button } from 'react-bootstrap';

const RegisterStudent: React.FC = () => {
  return(
    <>
      <Header />
      <Container fluid>
        <Jumbotron className="jumbotronContainer">
          <h2 className="titleForm">Cadastre um aluno</h2>
          <p className="descriptionForm">Cadastre um aluno no sistema preenchendo todos os campos e atrelando ele para um curso</p>
          <Card className="containerForm">
            <Card.Body>
              <Form>
                <Form.Row className="mb-2">
                  <Col>
                  <Form.Group>
                    <Form.Label className="labelInput"><strong>Curso do Aluno</strong></Form.Label>
                    <Form.Control className="inputForm" as="select" defaultValue="Escolha o curso do aluno">
                      <option>Administração</option>
                      <option>Direito</option>
                      <option>Medicina</option>
                    </Form.Control>
                  </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="labelInput"><strong>Código do aluno</strong></Form.Label>
                      <Form.Control 
                        className="inputForm"
                        type="text" 
                        placeholder="Digite o código do aluno" 
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>

                <Form.Row className="mb-2">
                  <Col>
                    <Form.Group>
                      <Form.Label className="labelInput"><strong>Nome do aluno</strong></Form.Label>
                      <Form.Control className="inputForm" type="text" placeholder="Digite o nome do aluno" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="labelInput"><strong>CPF do aluno</strong></Form.Label>
                      <Form.Control className="inputForm" type="text" placeholder="Digite o CPF do aluno" />
                    </Form.Group>
                  </Col>
                </Form.Row>

                <Form.Row className="mb-2">
                  <Col>
                    <Form.Group>
                      <Form.Label className="labelInput"><strong>E-mail do aluno</strong></Form.Label>
                      <Form.Control className="inputForm" type="email" placeholder="Digite o e-mail do aluno" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="labelInput"><strong>Telefone do aluno</strong></Form.Label>
                      <Form.Control className="inputForm" type="number" placeholder="Digite o Telefone do aluno" />
                    </Form.Group>
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Col>
                    <Form.Group>
                      <Form.Label className="labelInput"><strong>CEP do aluno</strong></Form.Label>
                      <Form.Control className="inputForm" type="text" placeholder="Digite o CEP do aluno" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="labelInput"><strong>Endereço do aluno</strong></Form.Label>
                      <Form.Control className="inputForm" type="text" placeholder="Digite o endereço do aluno" />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <hr/>
                <div className="buttonContainer">
                  <Button variant="primary">Cadastrar Aluno</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Jumbotron>
      </Container>
    </>
  );
};

export default RegisterStudent;