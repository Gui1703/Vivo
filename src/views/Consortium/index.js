import Cards from "../../components/Cards";
import UpBar from "../../components/UpBar";
import "./styles.scss";
import House from "../../assets/Images/house.png";

export default function Consortium() {
  return (
    <div className="container">
      <UpBar />
      <section>
        <div className="content">
          <h1>Consórcio do seu jeito!</h1>
          <p>
            Consórcio do seu jeito! Planejar seu futuro com o investimento
            certo, que melhor se encaixa no seu perfil e com toda a segurança!
          </p>
        </div>
        <div>
          <Cards name="Imóveis" value="0,09%" image={House} alt="image-house"/>
          {/* <Cards name="Imóveis" value="0,09%" image={House} alt="image-house"/>
          <Cards name="Imóveis" value="0,09%" image={House} alt="image-house"/> */}
        </div>
      </section>
    </div>
  );
}
