import { useState, useEffect  } from 'react';
import { RepositoryItem } from "./repositoryItem";
import '../styles/repositories.scss';

// API https://api.github.com/orgs/rocketseat/repos

const repository = {
    name: "unform",
    description: "Forms in react",
    link: "https://github.com/unform/unform"
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data));
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={ repository } />
                <RepositoryItem repository= { repository } />
                <RepositoryItem repository= { repository } />
            </ul>
        </section>
    );
}
