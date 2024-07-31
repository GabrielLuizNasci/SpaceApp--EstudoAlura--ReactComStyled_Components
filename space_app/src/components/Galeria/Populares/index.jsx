import styled from "styled-components"
import Titulo from "../../Titulo"

import fotos from './fotos-populares.json'

const ColunaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Imagem = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const Populares = () => {
    return (
        <>
            <Titulo $alinhamento="center">Populares</Titulo>
            <ColunaFotos>
                {fotos.map(( fotos ) => 
                    <Imagem
                        key={fotos.id}
                        src={fotos.path}
                        alt={fotos.alt}
                    />
                )}
            </ColunaFotos>
        </>
    )
}

export default Populares