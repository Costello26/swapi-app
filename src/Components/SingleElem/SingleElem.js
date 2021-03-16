import styled from 'styled-components';
import { Loader } from '../Loader/Loader';

export const SingleElem = ({content}) => (
        <ElemWrap>
            {content.loading ? <Loader/> : null}
            <div className="element__image element__item">
                <div className="item__image"
                    style={{
                        backgroundImage: `url("https://starwars-visualguide.com/assets/img/${content.type}/${content.id}.jpg"), url(https://starwars-visualguide.com/assets/img/big-placeholder.jpg)`,
                        }}>
                </div>
            </div>
            <div className="element__info element__item">
                <h3>{content.name}</h3>
                {content.fields ? content.fields.map((prop, i) => 
                    <p key={i}>{prop.label} <span>{prop.content}</span></p> 
                ) : null}
            </div>
        </ElemWrap>
    )

const ElemWrap = styled.div`
    background-color: #555;
    padding: 10px 10px;
    border-radius: 10px;
    flex-basis: 100%;
    display: flex;
    gap: 10px;
    position: relative;
    overflow: hidden;
    .element__item{
        background-color: #444;
        border-radius: 10px;
    }
    .element__image{
        flex-basis: 40%;
        .item__image{
            height: 200px;
            width: 200px;
            background-size: cover;
            background-position: top center;
            background-repeat: no-repeat;
            border-radius: 10px;
        }
    }
    .element__info{
        flex-basis: 60%;
        padding: 15px;
        p{
            font-weight: bold;
            span{
                font-weight: normal;
            }
        }
    }
`;