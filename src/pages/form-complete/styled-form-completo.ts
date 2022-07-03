import styled from 'styled-components';

export const Image = styled.img`
    flex-wrap: wrap;
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    padding: 90px;
`;

export const H2 = styled.h2`
    text-align: center;
`;

export const Instrucao = styled.p`
    text-align: center;
    margin: 20px 0 60px 0;
`;

export const Divisor = styled.hr`
    background-color: #e5e5e5;
    height: 1px;
    width: 100%;
    margin: 60px 0;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    textarea{
        min-height: 100px;
        max-height: 200px;
        min-width: 50%;
        max-width: 100%;
    }
`;

export const Aviso = styled.p`
    font-weight: 500;
    margin-bottom: 100px;
    strong {
        font-weight: 600;
        color: #bd041a;
    }
`;

