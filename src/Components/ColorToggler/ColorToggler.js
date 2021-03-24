import { useEffect, useContext } from 'react';
import Styled from 'styled-components';
import { Context } from '../../Functions/context';

export const ColorToggler = () => {
    const {colorSchemes: {colorScheme, setColorScheme}} = useContext(Context);
    useEffect(()=>{
        //document.body.style.backgroundColor = colorScheme.dark ? '#333' : '#aaa';
        document.getElementById("App").style.backgroundColor = colorScheme.dark ? '#333' : '#bbb';
    }, [colorScheme])
    return(
        <Toggler {...colorScheme} onClick={() => setColorScheme(
            colorScheme.dark ?
            {dark: false,
            icon: 'fas fa-sun',
            text: '#111',
            primary: '#fff',
            secondary: '#eee',
            active: 'rgb(107, 0, 173)'}
            :
            {dark: true,
            icon: 'fas fa-moon',
            text: '#fff',
            primary: '#444',
            secondary: '#555',
            active: 'rgb(107, 0, 173)'}
        )}>
            <i className={colorScheme.icon}></i>
        </Toggler>
    )
}

const Toggler = Styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
    background-color: ${(props) => props.primary };
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12.5%;
    cursor: pointer;
    color: ${(props) => props.dark ? '#fff' : props.active};
    transition: .3s;
    animation: fadeIn .3s;
`