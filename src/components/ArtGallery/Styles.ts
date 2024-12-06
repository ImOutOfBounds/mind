import styled from "styled-components";


export interface ITitle {
    color?: string; /* Nova prop para imagem de fundo */
}

export interface IArt{
    backgroundImage?: string;
}


export const Container = styled.div`
    justify-content: center;
`;

export const Title = styled.h1<ITitle>`
    color: ${(props) => props.color || "#fff"};;
    font-size: 50px;
    font-family: "Almendra SC", sans-serif;
    display: flex;
    justify-content: center;
    line-height: 1;
    margin: 100px 0;
`;

export const Span = styled.span<ITitle>`
    color: ${(props) => props.color || "#fff"};;
    padding: 0 20px;
`;

export const ArtsContainer = styled.div`
    justify-content: space-evenly;
    display: flex;
    margin-bottom: 100px
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 25vw;
`;


export const ArtCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
`;

export const ArtCard = styled.div<IArt>`
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 20vw;
    aspect-ratio: 1 / 1.6;
    margin-bottom: 40px;
`;

export const Button = styled.button`
    border: none;
    background-color: red;
    color: #fff;
    height: 60px;
    width: 60%;
    padding: 15px 50px;
    font-family: sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    margin: 40px auto;
    border-radius: 10px;
    font-family: "Alumni Sans", sans-serif;

    transition: .5s;

    &:hover {
    background-color: #701c16;
    }
`;

export const Text = styled.p`
    color: #fff;
    font-size: 30px;
    text-align: left;
    font-family: "Alumni Sans", sans-serif;
`;