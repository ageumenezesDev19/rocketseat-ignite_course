import React from 'react';
import { useState, useEffect  } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

interface Repository {
    name: string;
    id: number;
    description: string;
    html_url: string;
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([]);
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data));
    }, []);

    return (
        <>
          <section className="repository-list">
              <h1>Lista de repositórios da<br></br>Rocketseat</h1>

              <ul>
                  {repositories.map(repository => {
                      return <RepositoryItem
                      key={repository.id}
                      repository={ repository }
                      />
                  })}
              </ul>
          </section>
          <footer className="obs-footer">
            <p>Obs: Este mini projeto foi feito com React.js e tem como objetivo utilizar a API do GitHUb para <br></br>
                poder renderizar os repositórios da Rocketseat.</p>
          </footer>
        </>
    );
}
