import Styled from 'styled-components';
import { darkColor } from '../../GlobalStyles';

export const HeaderBar = ({links}) => {
    return(
        <Navbar>
            <ul>
                {links.map((link, value) => 
                    <li key={value}><a className={link.active ? 'active':''} href='true'>{link.text}</a></li>
                )}
            </ul>
        </Navbar>
    )
}

const Navbar = Styled.div`
    ul{
        display: flex;
        flex-direction: row;

        li{
            margin: 0 5px;
            a{
                font-size: 18px;
                padding: 5px 8px;
                border-radius: 3px;
                &:hover{
                    background-color: ${darkColor};
                }
                &.active{
                    background-color: ${darkColor};
                }
            }
        }
    }
`;