import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';
import { device } from '../../GlobalStyles';

export const HeaderBar = ({links, colorScheme, device}) => {
    return(
        <Navbar {...colorScheme} {...device}>
            <ul>
                {links.map((link, value) => 
                    <li key={value}>
                        <NavLink 
                        className={link.active ? 'active':''} 
                        to={link.path}>
                            {link.text}
                        </NavLink>
                    </li>
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
                    background-color: ${(props) => props.active};
                    color: #fff;
                }
                &.active{
                    background-color: ${(props) => props.active};
                    color: #fff;
                }
            }
        }
    }
    @media ${device.mobileL} {
        ul{
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            li{ 
                display: inline-block;
                a{
                    font-size: 15px;
                    background-color: rgb(107,0,173);
                    color: #fff;
                    padding: 5px 15px;
                    border-radius: 6px;
                }
            }
        }
    }
`;