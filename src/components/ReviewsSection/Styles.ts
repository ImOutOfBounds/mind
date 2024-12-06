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
    margin: 100px 0;
`;

export const ReviewContainer = styled.div`
    justify-content: space-evenly;
    display: flex;
    margin-bottom: 200px;
`;

export const ReviewCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
`;

export const ReviewCard = styled.div`
    display:flex;
    flex-direction: column;
`;

export const SpeechBubble = styled.div`
    position: relative;
    height: 150px;
    width: 25vw;
    margin-left: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E7E0EC;
    border-radius: 30px 30px 30px 0;
    padding: 20px;
`;

export const SpeechBubbleDetail = styled.div`
    content: "";
    height: 0;
    margin: 0 0 30px 60px;
    border-left: 40px solid #E7E0EC;
    border-right: 40px solid transparent;
    border-bottom: 40px solid transparent;
`

export const Text = styled.p<ITitle>`
    color: ${(props) => props.color || "#fff"};
    font-size: 15px;
    word-wrap: break-word;
    font-family: "Alumni Sans", sans-serif;
`;

export const TextBox = styled.div`
    color: 100%;
    height: 100%;
    width: calc(100% - 90px);
    display: flex;
    align-items: center;
    justify-content: center;
    word-wrap: break-word; 
`;

export const ReviwerContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const Reviwer = styled.div<IPersonCard>`
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 97px;
    width: 100px;
    border-radius: 50%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

