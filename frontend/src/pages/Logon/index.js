import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'; //importa as figuras/iconis
import { Link, useHistory } from 'react-router-dom'; //imports que controlam as rotas da aplicação

import api from '../../services/api';
import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLongin(e) {
        e.preventDefault(); //previne o envento natural do formulário de recarregar a página
    
        //regra de negócio responsável pela confirmação do login na página
       try{
           const response = await api.post('session', { id }); //recebe o ID ong e verifica se ella está cadastrada

           localStorage.setItem('ongId', id); //armazena o id da ong no cache do navegador
           localStorage.setItem('ongName', response.data.name); //armazena o nome da ong no cache do navegador

           history.push('/profile'); //redireciona o usuário para o perfil da ong.
       } catch (err) {
           alert('Falha no login, tente novamente.')
       }
    }

    // retorna o HTML da página com códigos JS embutidos.
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLongin}> 
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" value = {id} onChange = {e => setId(e.target.value)} />

                    <button className="button" type="submit"> Entrar </button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}
