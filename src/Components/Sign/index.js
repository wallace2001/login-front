import React, {useState} from 'react'
import axios from 'axios';

import {
    ContainerSign,
    SignCenter,
    BoxSign,
    Title,
    A
}
from './styles';

const Sign = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState("");
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


    }

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    const login = () => {
        axios.get(process.env.REACT_APP_URL+"/signin", { 
            auth: {
              username: users.email,
              password: users.password,
          }
      })
      .then(res => {
          if(res.data.message){
              setStatus(res.data.message);
          }else{
              setName(res.data.user.name);
              setStatus('');
          }
      })
      .catch(res => {
          setStatus("Email/senha incorreta!")
          setName('');
        });
    }

    const users = {
        email: email,
        password: password,
    }

    return (
            <ContainerSign>
                <SignCenter>
                    <BoxSign>
                        <form onSubmit={handleSubmit}>
                            <Title><h1>Teste de Login</h1></Title>
                            {status}
                            <label>E-mail</label>
                            <input type="email" onChange={handleEmail} />
                            <label>Senha</label>
                            <input type="password" onChange={handlePassword} />
                            <button type="submit" onClick={login}>Enviar</button>
                            <A to="/cadastrar" >Cadastrar</A>
                        </form>

                        <h1>{name}</h1>
                    </BoxSign>
                </SignCenter>
            </ContainerSign>
    )
}

export default Sign
