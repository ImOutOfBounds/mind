import styled from "styled-components";


export interface ICarousel {
    isActive?: boolean,
    margin?: string
}

export const FatherContainer = styled.div<ICarousel>`
    display: flex;
    flex-direction: column;
    padding: 60px 0;
    margin: 0 5vw;
    align-items: center;
`;

export const Container = styled.div<ICarousel>`
    display: flex;
    flex-direction: column;
    padding: 60px 0;
    width: 20vw;
`;

export const WaterMarkContainer = styled.footer<ICarousel>`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    color: white;
    text-align: center;
    position: relative;
    height: 150px;
`;

export const SubContainer = styled.div<ICarousel>`
    display: flex;
    padding: 10px 0;
    gap: 100px;
`;

export const Span = styled.span`
    border: 1px solid #fff;
    height: 0;
    width: 100%;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 30px;
    font-family: "Almendra SC", sans-serif;
    display: flex;
    line-height: 1;
    margin: 0;
`;

export const Text = styled.p`
    color: #fff;
    font-size: 20px;
    font-family: sans-serif;
`;

export const WhiteText = styled.p`
    color: #fff;
    font-size: 20px;
    font-family: sans-serif;
    padding: 0;
    margin: 10px;;
    text-decoration: none;
    transition: .2s;

    &:hover{
        color: red
    }
`;

export const RedText = styled.p`
    color: red;
    font-size: 20px;
    font-family: sans-serif;
`;

export const Image = styled.img`
    height: 90px;
    width: 90px;
    margin-bottom: 30px;
`;