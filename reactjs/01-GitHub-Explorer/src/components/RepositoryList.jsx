import React from "react";
import { Counter } from "./Counter";
import RepositoryItem from "./RepositoryItem";

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
        <Counter />
      </ul>
    </section>
  );
}

export default RepositoryList;
