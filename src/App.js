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

  return (
      <ul>
        { repositories.map(repo => (
        <li key={repo.id}>{repo.name}</li>
        )) }
      </ul>
  );
}


