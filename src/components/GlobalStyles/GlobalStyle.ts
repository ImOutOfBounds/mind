import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Almendra+SC&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Almendra+SC&family=Alumni+Sans:ital,wght@0,100..900;1,100..900&display=swap');

    :root {
        --green: #00A868;
        --gray: #909090;
        --white: #fff;
        --primary-font: Inter, 'sans-serif';
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #111;
    }

    body * {
        box-sizing: border-box;
        font-family: Inter, 'sans-serif';
    }

    body button, body a {
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        width: 12px; 
        height: 12px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--scrollbar-bg);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #780606;
        border-radius: 10px;
        border: 3px solid var(--scrollbar-bg);
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #c40c0c
    }

    ::-webkit-scrollbar-button {
        display: none;
    }

    ::-webkit-scrollbar-corner {
        background-color: transparent;
    }
`