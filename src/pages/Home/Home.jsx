import LinkButton from "../../components/layout/LinkButton/LinkButton";
import savings from "../../images/savings.jpg"
import { Section } from "./HomeStyled";

function Home(){
    return(
        <Section>
            <h1>Bem-vindo ao <span>JOJO COIN</span> </h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text ="Criar Projeto" />
            <img src= {savings} alt="JOJO COINS" />
        </Section>
    )
}

export default Home;