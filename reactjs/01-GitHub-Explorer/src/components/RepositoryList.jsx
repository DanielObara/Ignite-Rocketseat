import React, { useState, useEffect } from "react";
import RepositoryItem from "./RepositoryItem";
import '../styles/repositories.scss'

const repository= {
    nome: 'teste',
    description: 'asdfasdf',
    link: 'www.google.com'
}

function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/danielobara/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [repositories])

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
      <ul>
        {repositories.map(repositorie => (<RepositoryItem key={repositorie.name} repository={repositorie} />))}
       
      </ul>
    </section>
  );
}

export default RepositoryList;
