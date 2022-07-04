import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function App() {
const [repositories, setRepositories] = useState([]);

const baseURL = 'https://api.github.com/users/euFilpeSilva/repos'

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setRepositories(response.data)
    });
  },[]);// usse useEffect vai disparar somente uma vez, pois não especifica nada alem de um array vazio como segundo paramentro

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite); //filtra os repositorios que tem a propriedade favorito

    document.title = `Você tem ${filtered.lenght} favoritos`//exibindo total de repositorios na aba
  }, [repositories])// Toda vez que a propriedade (repositories) mudar essse useEffect vai disparar.

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? {...repo, favorite: !repo.favorite } : repo
    }); //Atualiza o estado dos repositorios

    setRepositories(newRepositories)
  }


  return (
      <ul>
        { repositories.map(repo => (
        <li key={repo.id}>{repo.name}
        {repo.favorite && <span>(FAVORITO)</span>}
        <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
        </li>
        )) }
      </ul>
  );
}


