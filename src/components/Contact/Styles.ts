import styled from "styled-components";


export interface ICarousel {
    isActive?: boolean,
    margin?: string
}

export const Container = styled.div<ICarousel>`
    display: flex;
    flex-direction: column;
    padding: 60px 0;
    width: 80vw;
    margin: auto;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 50px;
    font-family: "Almendra SC", sans-serif;
`;

export const Text = styled.p`
    color: #fff;
    font-size: 24px;
    font-family: "Alumni Sans", sans-serif;
`;

export const TitleRed = styled.span`
    color: red;
`;

export const TextContainer = styled.div`
    padding: 20px 0;
`;

export const SubContainer = styled.div<ICarousel>`
    display: flex;
    padding: 60px 0;
    gap: 100px;
`;

export const ContainerInfos = styled.div<ICarousel>`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 60px 0;
`;

export const Infos = styled.p<ICarousel>`
    padding: 60px 0;
    color: #fff;
    line-height: 1;
    margin: 0;
    font-size: 15px;
`;

export const SubTitle = styled.h1`
    color: #fff;
    font-size: 30px;
    font-family: "Almendra SC", sans-serif;
    display: flex;
    line-height: 1;
    margin: 0;
`;