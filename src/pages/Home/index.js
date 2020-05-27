import React, { useState } from "react";
import axios from "axios";
import * as Style from "./styled";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const [usuario, setUsuario] = useState("");
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then((res) => {
      const repositories = res.data;
      const repositoriesName = [];
      repositories.map((repos) => {
        repositoriesName.push(repos.name);
      });
      localStorage.setItem(
        "repositoriesName",
        JSON.stringify(repositoriesName)
      );
      setErro(false);
      history.push('/repositories')
    }).catch(err => {
      setErro(true);
    });
  }

  return (
    <Style.Container>
      <Style.Content>
        <Style.Input
          className="usuarioInput"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <Style.Button type="button" onClick={handlePesquisa}>
          Pesquisar
        </Style.Button>
        {erro ? <Style.ErrorMsg>Ocorreu um erro. Tente novamente.</Style.ErrorMsg> : ''}
      </Style.Content>
    </Style.Container>
  );
}
