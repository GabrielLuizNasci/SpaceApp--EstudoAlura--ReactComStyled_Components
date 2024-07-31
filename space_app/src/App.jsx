import { styled } from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"
import Cabecalho from "./components/Header"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import Galeria from "./components/Galeria"
import ModalZoom from "./components/ModalZoom"

import fotos from './fotos.json'
import { useState, useEffect } from "react"
import Rodape from "./components/Rodape"


const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;

`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosGaleria(fotosFiltradas)
  }, [filtro, tag])

  const aoFavoritar = (foto) => {
    if(foto.id === fotoSelecionada?.id){
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosGaleria(fotosGaleria.map(fotosGaleria => {
      return {
        ...fotosGaleria,
        favorita: fotosGaleria.id === foto.id ? !foto.favorita : fotosGaleria.favorita
      }
    }
    
    ))
  }

  return (
    <>
      <FundoGradiente>
        <EstilosGlobais />
        <AppContainer>
          <Cabecalho 
            filtro={filtro}
            setFiltro={setFiltro}
          />
          <MainContainer>
            <BarraLateral />
            <ConteudoGaleria>
              <Banner 
                texto= {"A galeria mais completa de fotos do espaço!"}
                backgroundImage={"src/assets/banner.png"}
              />
              <Galeria 
                setTag={setTag}
                aoFotoSelecionada={foto => setFotoSelecionada(foto)}
                aoFavoritar = {aoFavoritar}
                fotos={fotosGaleria}
              /> 
            </ConteudoGaleria>
          </MainContainer>
          <Rodape />
        </AppContainer>
        <ModalZoom 
          foto={fotoSelecionada}
          aoFechar={() => setFotoSelecionada(null)}
          aoFavoritar = {aoFavoritar}
        />
      </FundoGradiente>
    </>
  )
}

export default App
