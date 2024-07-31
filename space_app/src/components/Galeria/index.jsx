import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tags from "./Tags"
import Imagem from "./Imagem"



const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`
const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({ fotos = [], setTag, aoFotoSelecionada, aoFavoritar }) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(( fotos ) => 
                            <Imagem
                                aoZoomSolicitado={aoFotoSelecionada}
                                aoFavoritar={aoFavoritar}
                                key={fotos.id}
                                foto={fotos} 
                            />
                        )}
                    </ImagensContainer> 
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria