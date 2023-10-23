import styled from "styled-components";
import SearchBar from "../Components/SearchBar/SearchBar";
import Header from "../Components/Header/Header";
import { backgroundNegro } from "../Components/UI/valiables";

const Buscar = () => {
    return(
        <>  
            <Header/>
            <ContendedorBuscar>
                <SearchBar/>
            </ContendedorBuscar>
        </>
    );
}

export default Buscar;


const ContendedorBuscar = styled.div`
    background-color: ${backgroundNegro};
    height: calc(100vh - 4rem);
    display: flex;
    justify-content: center;
    align-items: start;
    padding: 2rem 1rem ;
`