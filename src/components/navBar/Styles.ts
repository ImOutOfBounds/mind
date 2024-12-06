import styled from "styled-components";


export interface InavBar {
    isActive?: boolean,
    margin?: string
}

export const Container = styled.div<InavBar>`
    background-color: #000;
    height: 80px;
    width: 100%;
    margin: ${(props) => props.margin || "auto"};
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    box-shadow: 0px 4px 10px rgba(255, 0, 0, 0.2);
`;

export const ImageContainer = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
`;

export const Image = styled.img`
    height: 100%;
`;

export const NavItem = styled.p`
    color: #fff;
    font-size: 20px;
    font-family: "Almendra SC", sans-serif;
    transition: color 0.3s ease, transform 0.3s ease;
    &:hover {
        cursor: pointer;
        color: red;
        transform: scale(1.05);
    }
    text-decoration: none;
`;
