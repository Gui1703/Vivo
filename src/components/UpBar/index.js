import { useNavigate } from "react-router-dom";
import "./styles.scss";
import Logo from "../../assets/Images/logo.png";
import TCS from "../../assets/Images/tcs.png";

export default function UpBar() {
  const navigate = useNavigate();

  function navigateTo(url) {
    navigate(`/${url}`);
  }
  return (
    <nav>
      <img className="logo" src={Logo} alt="logo-vivo" />
      <div className="link" onClick={() => navigateTo("Auto")}>
        Seguro Auto
      </div>
      <div className="link" onClick={() => navigateTo("Pet")}>
        Seguro Pet
      </div>
      <div className="link" onClick={() => navigateTo("Residential")}>
        Seguro Residencial
      </div>
      <div className="link" onClick={() => navigateTo("Travel")}>
        Seguro Viagem
      </div>
      <div className="link" onClick={() => navigateTo("Life")}>
        Seguro Vida
      </div>
      <div className="link" onClick={() => navigateTo("Bail")}>
        Seguro Fiança
      </div>
      <div className="link" onClick={() => navigateTo("")}>
        Consórcio
      </div>
      <div className="tcs">
        <div>Made by:</div>
        <img className="logo-tcs" src={TCS} alt="logo-tcs" />
      </div>
    </nav>
  );
}
