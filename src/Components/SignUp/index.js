import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {
    ContainerSign,
    SignCenter,
    BoxSign,
    Title,
    A
}
from './styles';


const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStates, setLoginStates] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
 
    }

    const nameChange = (e) => {
        setName(e.target.value);
    }

    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    const register = () => {
        axios.post(process.env.REACT_API_URL+"/signup",{
            name: users.name,
            email: users.email,
            password: users.password,
        })
        .then(res => {
            if(res.data.message){
                setLoginStates(res.data.message);
            }else{
                setLoginStates("Criado com sucesso!");
            }
        })
    }


    const users ={
        name: name,
        email: email,
        password: password
    }

    return (
        <ContainerSign>
            <SignCenter>
                <BoxSign>
                    <form onSubmit={handleSubmit}>
                        <Title><h1>Teste de Cadastro</h1></Title>
                        {loginStates}
                        <label>Nome</label>
                        <input type="text" onChange={nameChange}/>
                        <label>E-mail</label>
                        <input type="email" onChange={emailChange} />
                        <label>Senha</label>
                        <input type="password" onChange={passwordChange} />
                        <button type='submit' onClick={register}>Cadastrar</button>
                        <A to="/">Já tem uma conta ?</A>
                    </form>
                </BoxSign>
            </SignCenter>
        </ContainerSign>
    )
}

export default SignUp
