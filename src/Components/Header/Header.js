import Styled from 'styled-components';
import { Logo } from './Logo';
import { HeaderBar} from './HeaderBar';

export const Header = () => {
    const links = [
        {text: 'People', active: true},
        {text: 'Planets', active: false},
        {text: 'Starships', active: false},
    ]
    return(
        <HeaderWrap>
            <div className="header__logo header__item">
                <Logo/>
            </div>
            <div className="header__bar header__item">
                <HeaderBar links={links} />
            </div>
        </HeaderWrap>
    )
}

const HeaderWrap = Styled.div`
    background-color: #555;
    border-radius: 10px;
    color: #fff;
    display: flex;
    flex-basis: 100%;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    padding: 0 10px;
    .header__item{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;