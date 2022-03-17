import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import Logo from "../../assets/Images/logo.png";
import LogoMin from "../../assets/Images/logoMin.svg";
import TCS from "../../assets/Images/tcs.png";

function UpBar() {
  const navigate = useNavigate();
  const [styles, setStyles] = useState([
    { cursor: "pointer" },
    { cursor: "pointer" },
    { cursor: "pointer" },
    { cursor: "pointer" },
    { cursor: "pointer" },
    { cursor: "pointer" },
    { cursor: "pointer" },
  ]);

  useEffect(() => {
    navigate(``, 6);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function navigateTo(url, pos) {
    navigate(`/${url}`);
    let styleAux = [...styles];
    for (let i = 0; i < styleAux.length; i++) {
      if (i !== pos) {
        styleAux[i] = { cursor: "pointer" };
      } else {
        styleAux[i] = { background: "#FF9900", color: "#FFFFFF" };
      }
    }
    setStyles(styleAux);
  }

  return (
    <div>
      <div className="menu">
        <img className="logo" src={LogoMin} alt="logo-vivo" />
        <img className="logo-tcs" src={TCS} alt="logo-tcs" />
        <input type="checkbox" id="check" name="check" />
        <label htmlFor="check" className="lblCheck"><i className="bx bx-menu"/></label>
        <div className="nav-itens">
          <div
            style={styles[0]}
            className="link"
            onClick={() => navigateTo("Auto", 0)}
          >
            Seguro Auto
          </div>
          <div
            style={styles[1]}
            className="link"
            onClick={() => navigateTo("Pet", 1)}
          >
            Seguro Pet
          </div>
          <div
            style={styles[2]}
            className="link"
            onClick={() => navigateTo("Residential", 2)}
          >
            Seguro Residencial
          </div>
          <div
            style={styles[3]}
            className="link"
            onClick={() => navigateTo("Travel", 3)}
          >
            Seguro Viagem
          </div>
          <div
            style={styles[4]}
            className="link"
            onClick={() => navigateTo("Life", 4)}
          >
            Seguro Vida
          </div>
          <div
            style={styles[5]}
            className="link"
            onClick={() => navigateTo("Bail", 5)}
          >
            Seguro Fiança
          </div>
          <div
            style={styles[6]}
            className="link"
            onClick={() => navigateTo("", 6)}
          >
            Consórcio
          </div>
        </div>
      </div>

      <nav>
        <img className="logo" src={Logo} alt="logo-vivo" />
        <div
          style={styles[0]}
          className="link"
          onClick={() => navigateTo("Auto", 0)}
        >
          Seguro Auto
        </div>
        <div
          style={styles[1]}
          className="link"
          onClick={() => navigateTo("Pet", 1)}
        >
          Seguro Pet
        </div>
        <div
          style={styles[2]}
          className="link"
          onClick={() => navigateTo("Residential", 2)}
        >
          Seguro Residencial
        </div>
        <div
          style={styles[3]}
          className="link"
          onClick={() => navigateTo("Travel", 3)}
        >
          Seguro Viagem
        </div>
        <div
          style={styles[4]}
          className="link"
          onClick={() => navigateTo("Life", 4)}
        >
          Seguro Vida
        </div>
        <div
          style={styles[5]}
          className="link"
          onClick={() => navigateTo("Bail", 5)}
        >
          Seguro Fiança
        </div>
        <div
          style={styles[6]}
          className="link"
          onClick={() => navigateTo("", 6)}
        >
          Consórcio
        </div>
        <div className="tcs">
          <div>Made by:</div>
          <img className="logo-tcs" src={TCS} alt="logo-tcs" />
        </div>
      </nav>
    </div>
  );
}
export default UpBar;
