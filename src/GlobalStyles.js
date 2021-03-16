import { createGlobalStyle } from 'styled-components';

export const mainColor = '#785aa6';
export const darkColor = '#444';

export const GlobalStyles = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        background-color: #333;
        color: #fff;
        font-family: 'Roboto', sans-serif;
    }
    .App{
        background-color: ${darkColor};
        max-width: 900px;
        margin: 30px auto;
        border-radius: 12px;
        padding: 8px;
        border: 2px solid ${mainColor}; 
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        .app__mainblock{
            flex-basis: 58.8%;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .app__sidebar{
            flex-basis: 40%;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
    }
    a{
        text-decoration: none;
        color: inherit;
        transition: .3s;
    }
    ul{
        list-style-type: none;
    }
`;