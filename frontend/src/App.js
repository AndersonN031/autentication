import './App.css';
import { useEffect, useState } from 'react'
function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/auth/user')
      .then(res => res.json())
      .then(data => {
        console.log(data); // Verifica o objeto no console
        setUser(data); // Armazena o objeto retornado da API
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <div>
      <h1>Lista de Usuários</h1>
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              Nome: {user.name} - <strong>Email: {user.email}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <h1>Carregando dados..</h1>
      )}
    </div>
  );
};

export default App;
