import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function App() {
const [repositories, setRepositories] = useState([]);

const baseURL = 'https://api.github.com/users/euFilpeSilva/repos'

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setRepositories(response.data)
    });
  },[]);

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? {...repo, favorite: true} : repo
    }); //Atualiza o estado dos repositorios

    setRepositories(newRepositories)
  }


  return (
      <ul>
        { repositories.map(repo => (
        <li key={repo.id}>{repo.name}
        <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
        </li>
        )) }
      </ul>
  );
}


