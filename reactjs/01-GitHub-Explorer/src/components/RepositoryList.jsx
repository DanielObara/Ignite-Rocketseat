import React from "react";

function RepositoryList(props) {
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
      <ul>
        <li>
          <strong>Unform</strong>
          <p>descricao</p>
          <a href="">Link do repo</a>
        </li>
      </ul>
    </section>
  );
}

export default RepositoryList;
