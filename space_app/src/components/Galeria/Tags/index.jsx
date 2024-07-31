import styled from 'styled-components'
import tags from './tags.json'

const TagTituloStyled = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    font-family: 'GSR';
    font-weight: 400;
    margin: 0;
    margin-top: 1%;
    margin-right: 3%;
`

const SecaoTagsStyled = styled.div`
    margin-top: 3%;
    display: flex;
    align-items: center;
    gap: 24px;
`

const DivTags = styled.div`
    display: flex;
    justify-content: end;
    gap: 24px;
`

const BotaoStyled = styled.button`
    background: rgba(217, 217, 217, 0.3);
    color: #FFFFFF;
    border-radius: 10px;
    font-size: 24px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover{
        border-color: #C98CF1;
    }
    &:active {
        background: #C98CF1;
        color: rgba(217, 217, 217);
    }
`

const Tags = ({ setTag }) => {

    return (
        <>
            <SecaoTagsStyled>
                <TagTituloStyled>Busque por tags:</TagTituloStyled>
                <DivTags>
                    {tags.map(tag => 
                    <BotaoStyled key={tag.id} onClick={() => setTag(tag.tag)} >
                        {tag.titulo}
                    </BotaoStyled>)}
                </DivTags>   
            </SecaoTagsStyled>
        </>
    )
}

export default Tags