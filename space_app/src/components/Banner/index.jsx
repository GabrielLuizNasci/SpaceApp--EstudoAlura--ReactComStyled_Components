import styled from "styled-components"

const FiguraStyled = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`

const TituloStyled = styled.h1`
    font-family: 'GSR';
    color: #FFFFFF;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    max-width: 300px;
    padding: 0 64px;
`

const Banner = ({texto, backgroundImage}) => {
    return (
        <FiguraStyled $backgroundImage={backgroundImage}>
            <TituloStyled>
                    {texto}
            </TituloStyled>  
        </FiguraStyled>
    )
}

export default Banner