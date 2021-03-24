import { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Context } from '../Functions/context';
import {Helmet} from "react-helmet";
import { Redirect } from 'react-router-dom';

export const PageTemp = ({activeElem}) => {
    const {colorSchemes: {colorScheme}} = useContext(Context)
    return(
        <PageTempWrap {...colorScheme}>
            {!activeElem? 
            <Redirect to='/404'/>
            :
            <>
            <Helmet title={`${activeElem.name} - SWAPI App`} />
            <div className="content__block img__wrap">
                <img src={activeElem.image ? activeElem.image : ''} alt={activeElem.name}/>
            </div>

            <div className="content__block data__wrap">
                <div className="data__wrap__inner">
                    <div className="controls__wrap">
                        <Link to="/">Home</Link>
                        <Link to={`/${activeElem.type}/`}>{activeElem.type}</Link>
                    </div>
                    <h1>{activeElem.name}</h1>
                    <div className="fields">
                        {activeElem.fields.map((field)=>
                            <span className="field">
                                <b>{field.label}</b>
                                {field.content}
                            </span>
                        )}
                        {activeElem.additionalFields.map((field)=>
                            <span className="field">
                                <b>{field.label}</b>
                                {field.content}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            </>
            }
        </PageTempWrap>
    )
}

const PageTempWrap = styled.div`
    background-color: ${(props) => props.secondary};
    border-radius: 8px;
    width: 100%;
    color: ${(props) => props.dark ? props.text : props.active};
    transition: .3s;
    display: flex;
    flex-wrap: wrap;
    max-height: 800px;
    padding: 10px;
    justify-content: space-around;
    animation: fadeIn 1s linear;
    .img__wrap{
        flex-basis: 30%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            border-radius: 8px;
        }
    }
    .data__wrap{
        background-color: ${(props) => props.primary};
        transition: .3s;
        border-radius: 8px;
        flex-basis: 68%;
        .data__wrap__inner{
            padding: 15px;
        }
        .controls__wrap{
            a{
                display: inline-block;
                background-color: ${(props) => props.dark ? props.text : props.active};
                color: ${(props) => props.primary};
                padding: 5px 15px;
                border-radius: 6px;
                margin: 0 3px;
                &:first-letter{
                    text-transform: uppercase;
                }
            }
        }
        .fields{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            .field{
                background-color: ${(props) => props.secondary};
                width: 45%;
                padding: 5px;
                border-radius: 6px;
            }
        }
        span{
            display: inline-block;
            font-size: 20px;
            padding: 3px 0;
        }
    }
`;