import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerSign = styled.div`
    width: 100%;

`;

export const SignCenter = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    
    
`;

export const BoxSign = styled.div`
    margin-top: 150px;
    border: 1px solid black;
    padding: 5% 5%;

form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    input{
        margin-bottom: 30px;
        padding: 2% 2%;
    }

    button{
        margin-top: 30px;
    }
}
`;

export const Title = styled.div`
    margin-bottom: 10px;
`;

export const A = styled(Link)`
    margin-top: 10px;
    text-decoration: none;
`;