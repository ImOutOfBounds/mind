import styled from "styled-components";

export interface ICarousel {
    backgroundImage?: string; /* Nova prop para imagem de fundo */
}

export const Container = styled.div<ICarousel>`
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: end;
    width: 100%;
    aspect-ratio: 1 / .40;
    position: relative;
    z-index: 1;
    top: 80px;
    margin-bottom: 100px;
`;



export const Button = styled.button`
    border: none;
    background-color: red;
    color: #fff;
    height: 60px;
    border-radius: 10px;
    padding: 15px 50px;
    font-family: sans-serif;
    margin-top: 100px;
    margin-bottom: 70px;
    transition: .5s;

    &:hover {
        background-color: #701c16;
    }

`;
