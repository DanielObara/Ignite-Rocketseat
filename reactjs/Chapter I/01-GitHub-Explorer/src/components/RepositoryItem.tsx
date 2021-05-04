
interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}
const RepositoryItem = (props: RepositoryItemProps) => {
  return (
      <li>
        <strong>{props.repository.name ?? 'Default'}</strong>
        <p>{props.repository.description}</p>
        <a href={props.repository.html_url}>Link do repo</a>
      </li>
  );
};

export default RepositoryItem;
