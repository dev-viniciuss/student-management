import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import { Jumbotron } from 'react-bootstrap';

const Home: React.FC = () => {

  return(
    <>
      <Header />
        <Jumbotron>
            <h1 className="display-3">Bem vindo ao Student Management</h1>
            <p className="lead">Este é seu sistema, utilize a barra de navegação para acessar as páginas</p>
            <hr className="my-4" />
            <p>Use ele para cadastrar,adcionar e excluir cursos e alunos.</p>
            <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/RegisterStudent" role="button">Cadastrar Alunos</Link>
            </p>
        </Jumbotron>
    </>
  );
};

export default Home;