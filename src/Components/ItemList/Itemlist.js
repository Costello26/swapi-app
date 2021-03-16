import styled from 'styled-components';
import { Loader } from '../Loader/Loader';

export const ItemList = ({currentList, setActiveElem, pagination}) => {
    return(
        <ItemListWrap>
            { currentList.results ?
                <>
                <ul>
                {currentList.results.map((item, key)=>
                    <li key={key}>
                        <a className={item.active ? 'active':''} 
                        href="true" 
                        onClick={(e)=> {e.preventDefault(); setActiveElem(item)}}
                        num={item.id}>
                            {item.name}
                        </a>
                    </li>
                )}
                </ul>
                <div className="controls">
                    <a href="true" 
                       className="controls-button controls-button-prev"
                       onClick={(e)=> {
                            pagination(e, currentList.previous)
                           }}>
                        <i className="fas fa-angle-double-left"></i>
                    </a>
                    <a href="true" 
                       className="controls-button controls-button-prev"
                       onClick={(e)=> {
                            pagination(e, currentList.next)
                           }}>
                        <i className="fas fa-angle-double-right"></i>
                    </a>
                </div>
                </>
            :
                <Loader/>
            }
        </ItemListWrap>
    )
}

const ItemListWrap = styled.div`
    width: 100%;
    background-color: #555;
    border-radius: 10px;
    padding: 10px;
    max-height: 430px;
    position: relative;
    ul{
        padding: 0;
        margin: 0;
        padding-right: 5px;
        height: 92%;
        overflow-x: hidden;
        &::-webkit-scrollbar{
            width: 6px;
            background-color: #666;
            border-radius: 25px;
            position: relative;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #444;
        }
        li{
            flex-basis: 100%;
            background-color: #444;
            border-radius: 8px;
            margin: 10px 0px;
            padding: 15px 5px;
            cursor: pointer;
            &:first-child{
                margin-top: 0px;
            }
            a{
                transition: .3s;
                display: block;
                height: 100%;
                width: 100%;
                &:hover, &.active{
                    color: #bbb;
                }
            }
        }
    }
    .controls{
        width: 95%;
        height: 5%;
        margin: 0 auto;
        margin-top: 3%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #444;
            padding: 5px 10px;
            border-radius: 5px;
            transition: .3s;
            &:hover, &.active{
                color: #bbb;
            }
        }
    }
`;
