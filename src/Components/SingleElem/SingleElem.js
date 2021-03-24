import styled from 'styled-components';
import { Loader } from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { device } from '../../GlobalStyles';

export const SingleElem = ({content, colorScheme}) => {
    return(
        <ElemWrap {...colorScheme}>
            {content.loading ? <Loader/> : null}
            <div className="element__image element__item">
                <div className="item__image"
                    style={{
                        backgroundImage: `url(${content.image}), 
                        url('https://cdn.dribbble.com/users/1898911/screenshots/4349966/gifs.gif')`
                        }}>
                </div>
            </div>
            <div className="element__info element__item">
                <h3>{content.name}</h3>
                {content.fields ? content.fields.map((prop, i) => 
                    <p key={i}>{prop.label} <span>{prop.content}</span></p> 
                ) : null}
                <Link to={`${content.type}/${content.id}`}>More details...</Link>
            </div>
        </ElemWrap>
    )}

const ElemWrap = styled.div`
    background-color: ${(props)=> props.secondary};
    padding: 10px 10px;
    border-radius: 10px;
    flex-basis: 100%;
    display: flex;
    gap: 10px;
    //position: relative;
    overflow: hidden;
    animation: ${(props) => props.loading ? 'none' : 'fadeIn 1s'};
    transition: .3s;
    .element__item{
        background-color: ${(props)=> props.primary};
        border-radius: 10px;
    }
    .element__image{
        flex-basis: 40%;
        @media ${device.tablet} {
            flex-basis: 50%;         
        }
        .item__image{
            height: 100%;
            width: 200px;
            background-size: cover;
            background-position: top center;
            background-repeat: no-repeat;
            border-radius: 10px;
            @media ${device.tablet} {
               width: 100%; 
            }
        }
    }
    .element__info{
        flex-basis: 60%;
        padding: 15px;
        color: ${(props) => props.text} !important;
        @media ${device.tablet} {
            flex-basis: 50%;        
        }
        h3{
            @media ${device.tablet} {
                font-size: 16px;
                margin: 5px 0;   
            }
        }
        p{
            font-weight: bold;
            @media ${device.tablet} {
                font-size: 16px;
                margin: 7px 0;   
            }
            span{
                font-weight: normal;
            }
        }
        a{
            background-color: ${(props)=> props.active};
            color: ${(props)=> props.dark? props.text : props.secondary };
            padding: 5px 10px;
            border-radius: 5px;
            display: inline-block;
        }
    }
`;