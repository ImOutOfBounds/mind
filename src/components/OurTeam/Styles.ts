import styled from "styled-components";

export interface ITitle {
    color?: string; /* Nova prop para imagem de fundo */
}

export interface IPersonCard{
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
    margin: 0;
`;

export const PersonContainer = styled.div`
    justify-content: space-evenly;
    display: flex;
    margin-bottom: 200px;
`;

export const PersonCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    transition: 2s;
    animation: transform 0.3s ease;

    &.slide-left {
        transform: translateX(-100%);
    }

    &.slide-right {
        transform: translateX(100%);
    }

    &:not(.slide-left):not(.slide-right) {
        transform: translateX(0);
    }
`;

export const PersonCard = styled.div<IPersonCard>`
    position: relative;
    width: 30vw;
    margin-bottom: 40px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PersonIcon = styled.img<IPersonCard>`
    height: 15vw;
    z-index: 1;
    border-radius: 100%;
    margin: 70px 0;
    border: 15px solid #222;
`;

export const PersonName = styled.p`
    color: #fff;
    font-size: 30px;
    line-height: 1;
    margin: 0;
    font-family: "Alumni Sans", sans-serif;
    text-align: center
`;

export const PersonButton = styled.button`
    background-color: red;
    border: none;
    color: #fff;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    text-align: center;
    margin: auto 0;
    transition: .5s;

    &:hover {
        background-color: #701c16;
    }
`


