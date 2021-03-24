import { createGlobalStyle } from 'styled-components';

export const mainColor = '#785aa6';
export const darkColor = '#444';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '490px',
    tablet: '865px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

  export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
  };

export const GlobalStyles = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        background: linear-gradient(90deg, rgb(107, 0, 173) 0%, rgb(0, 8, 81) 100%);
        color: #fff;
        font-family: 'Roboto', sans-serif;
    }
    .App{
        background-color: #333;
        max-width: 900px;
        margin: 30px auto;
        border-radius: 12px;
        padding: 8px;
        border: 2px solid ${mainColor}; 
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        @media ${device.mobileL}{
            margin: 0;
            border-radius: 0;
            border: none;
        }
        .app__mainblock{
            flex-basis: 58.8%;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            @media ${device.tablet} {
                flex-basis: 100%;
            }
        }
        .app__sidebar{
            flex-basis: 40%;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            @media ${device.tablet} {
                flex-basis: 100%;
            }
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
    @keyframes fadeIn {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`;