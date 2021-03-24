import { useContext } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Context } from '../../Functions/context';
import { device } from '../../GlobalStyles';

export const Logo = () => {
    const {colorSchemes: {colorScheme}} = useContext(Context);
    return(
        <LogoWrap {...colorScheme}>
            <Link to="/">
                <h1>SWAPI<i className="fab fa-react"></i></h1>
            </Link>
        </LogoWrap>
    )
}

const LogoWrap = Styled.div`
    a{
        color: ${(props) => !props.dark ? props.active : props.text };
        text-decoration: none;
        font-weight: bold;
        h1{
            i{
                animation: H1Anim 4s ease-in-out infinite; 
            }
        }
        @keyframes H1Anim {
            from{
                transform: rotate(180deg)
            }
            to{
                transform: rotate(360deg)
            }
        }
    }
    @media ${device.mobileL} {
        h1{
            margin: 0;
            margin-top: 15px; 
        }        
    }
`;