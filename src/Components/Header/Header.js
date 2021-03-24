import { useContext } from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';
import { HeaderBar} from './HeaderBar';
import { Context } from '../../Functions/context';
import { device } from '../../GlobalStyles';

export const Header = () => {
    const {colorSchemes: {colorScheme}} = useContext(Context);
    const links = [
        {text: 'People', active: false, path: '/characters'},
        {text: 'Planets', active: false, path:'/planets'},
        {text: 'Starships', active: false, path:'/starships'},
    ]
    return(
        <HeaderWrap {...colorScheme}>
            <div className="header__logo header__item">
                <Logo/>
            </div>
            <div className="header__bar header__item">
                <HeaderBar links={links} colorScheme={colorScheme} device={device} />
            </div>
        </HeaderWrap>
    )
}

const HeaderWrap = styled.div`
    background-color: ${(props) => props.secondary};
    border-radius: 10px;
    color: ${(props) => props.text};
    display: flex;
    flex-basis: 100%;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    padding: 0 10px;
    transition: .3s;
    @media ${device.mobileL}{
        padding: 0px;
        border: none;
        max-height: 120px;
        .header__item{
            width: 100%;
        }
    }
    .header__item{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;