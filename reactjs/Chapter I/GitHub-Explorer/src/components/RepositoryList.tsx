import React, { useState, useEffect } from "react";
import RepositoryItem from "./RepositoryItem";
import '../styles/repositories.scss'

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

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
