import React, {useEffect, useState} from 'react';
import * as Style from './styled';
import {useHistory} from 'react-router-dom';


export default  function Repositories() {
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName != null){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        }else{
            history.push('/');
        }

    }, []);
    return(
        <Style.Container>
            <Style.Title>Repositories</Style.Title>
            <Style.List>
                {repositories.map(repos => {
                    return(
                        <Style.ListItem>Repositório: {repos}</Style.ListItem>
                    )
                })}
            </Style.List>
            <Style.LinkHome to="/">Voltar</Style.LinkHome>
        </Style.Container>
    )
}
