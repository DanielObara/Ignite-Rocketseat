import React from "react";

const RepositoryItem = (props) => {
  return (
    <>
      <li>
        <strong>{props.repository.name ?? 'Default'}</strong>
        <p>{props.repository.description}</p>
        <a href={props.repository.link}>Link do repo</a>
      </li>
    </>
  );
};

export default RepositoryItem;
