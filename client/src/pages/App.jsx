import GameCard from "../components/cards/gameCard/gameCard";
import SaleCard from "../components/cards/saleCard/saleCard";
import Container from "../components/container/container";
import Subtitle from "../components/forms/subtititle/subtitle";
import Nav from "../components/nav/Nav";
import "./App.css";

import { cartState } from "../atoms/cart";
import { useRecoilState } from "recoil";

const App = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const handleAddProduct = (info) => {
    setCart([...cart, info]);
  };
  // console.log(cart);
  return (
    <div>
      <Nav />

      <Container>
        <Subtitle>promoções</Subtitle>
        <div className="saleContainer">
          <SaleCard
            title={"Terraria"}
            fullPrice={199.9}
            discount={30}
            onAdd={() =>
              handleAddProduct({
                name: "Terraria",
                price: 199.9 - (199.9 * 0.3),
                img: "Terraria",
              })
            }
          />

          <SaleCard 
          title={"Minecraft"} 
          fullPrice={149.9} 
          discount={40} 
          onAdd={() =>
            handleAddProduct({
              name: "Minecraft",
              price: 149.9 - (149.9 * 0.4),
              img: "Minecraft",
            })
          }
          />

          <SaleCard 
          title={"Valorant"} 
          fullPrice={189.9} 
          discount={50} 
          onAdd={() =>
            handleAddProduct({
              name: "Valorant",
              price: 189.9 - (189.9 * 0.5),
              img: "valorant",
            })
          }
          />
        </div>

        <div className="gameSession">
          <Subtitle>Outros Jogos</Subtitle>
          <div className="gameContainer">
            <GameCard
              title={"CSGO"}
              info={"Ação, estratégia, multijogador."}
              price={99.9}
              onAdd={() =>
                handleAddProduct({
                  name: "CS:GO",
                  price: 99.9,
                  img: "CSGO",
                })
              }
            >
              Counter Strike: Global Offensive
            </GameCard>

            <GameCard
              title={"gta"}
              info={"Ação, aventura"}
              price={100.0}
              onAdd={() =>
                handleAddProduct({
                  name: "GTA V",
                  price: 100.0,
                  img: "gta",
                })
              }
            >
              Grand Theft Auto
            </GameCard>

            <GameCard
              title={"tlou"}
              info={"Ação, aventura, sobrevivência"}
              price={199.9}
              onAdd={() =>
                handleAddProduct({
                  name: "The Last Of Us",
                  price: 199.9,
                  img: "tlou",
                })
              }
            >
              The Last Of Us
            </GameCard>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
