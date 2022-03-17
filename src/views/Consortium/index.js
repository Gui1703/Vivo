import Cards from "../../components/Cards";
import "./styles.scss";
import House from "../../assets/Images/house.png";
import Car from "../../assets/Images/car.png";
import Truck from "../../assets/Images/truck.png";
import Parcel from "../../components/Parcel";

export default function Consortium() {
  return (
    <div className="main">
      <section>
        <div className="content">
          <h1>Consórcio do seu jeito!</h1>
          <p>
            Consórcio do seu jeito! Planejar seu futuro com o investimento
            certo, que melhor se encaixa no seu perfil e com toda a segurança!
          </p>
        </div>
        <div className="cards">
          <Cards name="Imóveis" value="0,09%" image={House} alt="image-house" />
          <Cards name="Carros" value="0,34%" image={Car} alt="image-car" />
          <Cards name="Pesados" value="0,13%" image={Truck} alt="image-truck" />
        </div>

        <div className="div-parcel">
          <Parcel />
        </div>
      </section>
    </div>
  );
}
