import { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../Functions/context'
import {Helmet} from "react-helmet"

export const NotFound = () => {
    const { colorSchemes: {colorScheme}} = useContext(Context)
    return(
        <NotFoundWrap {...colorScheme}>
            <Helmet title='Page Not Found! - SWAPI App'/>
            <div className='NotFoundInner'>
                <span>Ooops!</span>
                <span className='main'><i className="fas fa-user-astronaut"></i> 404</span>
                <span>Page not found</span>
            </div>
        </NotFoundWrap>
    )
}

const NotFoundWrap = styled.div`
    width: 100%;
    border-radius: 8px;
    background-color: ${(props) => props.secondary};
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    .NotFoundInner{
        text-align: center;
        transition: .3s;
        animation: notFound 3s linear infinite;
        span{
            font-weight: bold;
            display: block;
            color: ${(props) => !props.dark ? props.active : props.text};
            font-size: 48px;
            text-transform: uppercase;
        }
        .main{
            font-size: 146px;
        }
    }
    @keyframes notFound {
        0%{
            transform: translateY(0px)
        }
        50%{
            transform: translateY(10px)
        }
        100%{
            transform: translateY(0px) 
        }
    }
`;