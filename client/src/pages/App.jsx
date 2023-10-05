import GameCard from "../components/cards/gameCard/gameCard";
import SaleCard from "../components/cards/saleCard/saleCard";
import Container from "../components/container/container";
import Subtitle from "../components/forms/subtititle/subtitle";
import Nav from "../components/nav/Nav";
import "./App.css";

const App = () => {
  return (
    <div>
      <Nav />

      <Container>
        <Subtitle>promoções</Subtitle>
        <div className="saleContainer">
          <SaleCard title={"Terraria"} fullPrice={199.9} discount={30} />
          <SaleCard title={"Minecraft"} fullPrice={149.9} discount={40} />
          <SaleCard title={"Valorant"} fullPrice={189.9} discount={50} />
        </div>

        <div className="gameSession">
        <Subtitle>Outros Jogos</Subtitle>
        <div className="gameContainer">
          <GameCard
            title = {"CSGO"} 
            info = {"Ação, estratégia, multijogador."}
            price = {99.90}>
            Counter Strike: Global Offensive</GameCard>
        </div>
        </div>

      </Container>
    </div>
  );
};

export default App;
