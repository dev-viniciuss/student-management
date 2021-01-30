import React from 'react';

import Header from '../../components/Header';

import { Container, Jumbotron, Card, Table, Button } from 'react-bootstrap';

const ShowStudent: React.FC = () => {
  return(
    <>
      <Header />
      <Container fluid>
        <Jumbotron className="jumbotronContainer">
          <h2 className="titleForm">Cadastre um curso</h2>
          <p className="descriptionForm">Cadastre um curso no sistema preenchendo todos os campos requisitados</p>
          <Table className="containerTable" hover responsive>
            <thead>
              <tr>
                <th>#</th>
                {Array.from({ length: 12 }).map((_, index) => (
                  <th key={index}>Table heading</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>2</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>3</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
            </tbody>
          </Table>
        </Jumbotron>
      </Container>
    </>
  );
};

export default ShowStudent;