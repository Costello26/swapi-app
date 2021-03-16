import Styled from 'styled-components';

export const ColorToggler = () => {
    return(
        <Toggler>
            <i className="fas fa-moon"></i>
        </Toggler>
    )
}

const Toggler = Styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12.5%;
    cursor: pointer;
`