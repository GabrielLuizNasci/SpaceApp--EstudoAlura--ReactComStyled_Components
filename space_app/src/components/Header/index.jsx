import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        max-width: 212px;
        margin-left: 2%;
    }
`

const Cabecalho = () => {
    return (
        <HeaderStyled>
            <img src="/imagens/logo.png" alt="Logo do Site" />
            <CampoTexto />
        </HeaderStyled>
    )
}

export default Cabecalho