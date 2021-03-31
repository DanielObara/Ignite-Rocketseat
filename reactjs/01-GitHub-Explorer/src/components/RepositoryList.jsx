import React from "react";
import RepositoryItem from "./RepositoryItem";
import '../styles/repositories.scss'

const repository= {
    nome: 'teste',
    description: 'asdfasdf',
    link: 'www.google.com'
}

function RepositoryList(props) {
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}

export default RepositoryList;
