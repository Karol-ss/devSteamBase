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
        <Subtitle>
          promoções
        </Subtitle>
        <div className="saleContainer">
          <SaleCard  title={"Terraria"} fullPrice={199.90} discount={30}/>
          <SaleCard title={"Minecraft"} fullPrice={149.90} discount={40}/>
          <SaleCard title={"Valorant"} fullPrice={189.90} discount={50}/>

        </div>
      </Container>
    </div>
  );
};

export default App;
