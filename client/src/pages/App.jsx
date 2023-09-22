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
        <Container>
          <SaleCard discount={"50"}>

          </SaleCard>
        </Container>
      </Container>
    </div>
  );
};

export default App;
