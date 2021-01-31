import React from 'react';

import Header from '../../components/Header';

import { FiEdit, FiTrash, FiInfo } from 'react-icons/fi';

import { Container, Jumbotron, Table, Button, Card } from 'react-bootstrap';

import studentInformation from './fakeData';

const ShowStudent: React.FC = () => {
  return(
    <>
      <Header />
      <Container fluid>
        <Jumbotron className="jumbotronContainer">
          <h2 className="titleForm">Pesquise pelos estudantes cadastrados</h2>
          <p className="descriptionForm">Aqui você tem acesso a todos os estudantes cadastrados na plataforma</p>
          <Table className="stylesTable" hover responsive>
            <thead>
              <tr>
                <th>Código do aluno</th>
                <th>Nome do aluno</th>
                <th>Cpf do aluno</th>
                <th>Curso matriculado</th>
                <th>Editar aluno</th>
                <th>Deletar aluno</th>
                <th>Mais informações</th>
              </tr>
            </thead>

            {studentInformation.map( (item, index) => (
              <tbody key={index}>
                <tr>
                  <td>{item.codigoAluno}</td>
                  <td>{item.nomeAluno}</td>
                  <td>{item.cpfAluno}</td>
                  <td>{item.cursoAluno}</td>
                  <td><Button variant="primary"><FiEdit /></Button></td>
                  <td><Button variant="danger"><FiTrash /></Button></td>
                  <td><Button variant="primary"><FiInfo /></Button></td>
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

export default ShowStudent;