import "./styles.scss";

export default function Cards(props) {
  return (
    <div className="card">
      <div className="card-up">
        <img src={props.image} alt={props.alt} />
        <p className="name">{props.name}</p>
      </div>

      <div className="card-bottom">
        <p className="rate">Taxa mensal de</p>
        <span>{props.value}</span>
      </div>
    </div>
  );
}
