export function RepositoryItem(props) {
return (
    <li>
        <strong>{props.repository.name ?? 'Default'}</strong>
        <p>{props.repository.description}</p>

         <a href={props.repository.html_url} target="_blank">
             Acessar o repositório!
         </a>
    </li>
    );
}
