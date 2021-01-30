import React from 'react';

import Header from '../../components/Header';

import { FiEdit, FiTrash } from 'react-icons/fi';

import { Container, Jumbotron, Table, Button, Card } from 'react-bootstrap';

import courseInformation from './fakeData';

const ShowCourse: React.FC = () => {
  return(
    <>
      <Header />
      <Container fluid>
        <Jumbotron className="jumbotronContainer">
          <h2 className="titleForm">Pesquise pelos cursos cadastrados</h2>
          <p className="descriptionForm">Aqui você tem acesso a todos os cursos cadastrados na plataforma</p>
          <Table className="stylesTable" hover responsive>
            <thead>
              <tr>
                <th>Código do curso</th>
                <th>Nome do curso</th>
                <th>Data de cadastro</th>
                <th>Carga horária</th>
                <th>Editar curso</th>
                <th>Deletar curso</th>
              </tr>
            </thead>

            {courseInformation.map( (item, index) => (
              <tbody key={index}>
                <tr>
                  <td>{item.codigoCurso}</td>
                  <td>{item.nomeCurso}</td>
                  <td>{item.dataCadastro}</td>
                  <td>{item.cargaHoraria}</td>
                  <td><Button variant="primary"><FiEdit /></Button></td>
                  <td><Button variant="danger"><FiTrash /></Button></td>
                </tr>                    
              </tbody>
            ))}
          </Table>

          <Card>
            <Card.Body>
              <div className="buttonContainer">
                <Button variant="success">Exportar lista de cursos para o Excel</Button>
              </div>
            </Card.Body>
          </Card>
        </Jumbotron>
      </Container>
    </>
  );
};

export default ShowCourse;