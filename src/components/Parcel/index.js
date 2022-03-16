import "./styles.scss";
import People from "../../assets/Images/people.png";

export default function Parcel() {
  return (
    <>
      <div className="parcel">
        <span>25%</span>
        <p>da parcela reduzida até a contemplação da sua carta de crédito!</p>
      <img src={People} alt="imagem-people" />
      </div>
    </>
  );
}
