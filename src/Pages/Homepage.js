import { useContext} from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/context';
import {Helmet} from "react-helmet";
import { device } from '../GlobalStyles';

export const Homepage = () => {
    const now = new Date();
    const {colorSchemes: {colorScheme}} = useContext(Context)
    const tags = [
        '#React.js', '#Udemy', '#ES2020', '#starwars', '#ReactRouter', '#ReactHooks', '#JSX', '#NPM', '#GIT',
        '#StyledComponents', '#PinkFloyd', '#CocaCola', '#Enigma', '#JSFetch', '@Costello26'
    ]
    return(
        <HomepageWrap {...colorScheme}>
            <Helmet title='Home - SWAPI App' />
            <div className="homepage__inner"> 
                <i className="fab fa-old-republic"></i>  
                <h1>Welcome to {`<SWAPI/>`} App!</h1>
                <span id="date" className='piece'>
                        {now.getDate()}.{now.getMonth()+1}.{now.getFullYear()}
                </span>
            </div>
            <div className="homepage__bottom">
                <span>
                    <span className='piece'>
                        Supported by:
                    </span>
                    {tags.map((tag) => 
                        <span className='piece'>
                            {tag}
                        </span>
                    )}
                    
                </span>
            </div>
        </HomepageWrap>
    )
}

const HomepageWrap = styled.div`
    background-color: ${(props) => props.secondary};
    border-radius: 10px;
    color: ${(props) => props.text};
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    animation: fadeIn 1s;
    transition: .3s;
    .homepage__inner{
        width: 60%;
        flex-basis: 50%;
        text-align: center;
        margin: 80px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        i{
            font-size: 172px;
            color: ${(props) => props.dark ? props.text : props.active};
        }
        h1{
            color: ${(props) => props.dark ? props.text : props.active};
            font-size: 36px;
            margin: 10px 0px;
        }
        span{
            color: ${(props) => props.dark ? props.text : props.active};
        }
    }
    .homepage__bottom{
        text-align: center;
        margin-bottom: 5px;
        span{
            display: flex;
            flex-wrap: wrap;
            font-size: 16px;
            gap: 5px;
            &:first-child{
                background-color: transparent;
                color: ${(props) => props.text}
            }
        }
        .piece{
            background-color: ${(props) => props.dark ? props.text : props.active};
            color: ${(props) => props.primary};
            padding: 5px 15px;
            border-radius: 6px;
        }
    }
    @media ${device.mobileL} {
        height: calc(100vh - 140px);
            .homepage__inner{
                i{
                    font-size: 120px;
                }
                h1{
                    font-size: 26px;
                }
            }
    }
`;