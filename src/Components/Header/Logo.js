import Styled from 'styled-components';

export const Logo = () => {
    return(
        <LogoWrap>
            <a href="true" onClick={(e)=> e.preventDefault()}>
                <h1>SWAPI App</h1>
            </a>
        </LogoWrap>
    )
}

const LogoWrap = Styled.div`
    a{
        color: inherit;
        text-decoration: none;
    }
`;