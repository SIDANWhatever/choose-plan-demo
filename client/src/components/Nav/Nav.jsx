import "./nav.css";
import { useContext, useEffect } from "react";
import { PlanContext } from "../../Contexts/PlanContext";
import Theme from "../../Assets/Theme";

const Nav = () => {
  const { choosing, setChoosing, theme, setTheme } = useContext(PlanContext);
  // const [choosing, setChoosing] = useState(true);

  const changeTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="nav">
      <div
        className="n-theme"
        onClick={() => {
          changeTheme();
        }}
      >
        <Theme />
      </div>
      <div className="n-item">
        <div onClick={() => setChoosing(false)}>Create Plan</div>
      </div>
      <div className="n-item">
        <div onClick={() => setChoosing(true)}>Choose Plan</div>
      </div>
      <div className="n-title">Full Stack Demo</div>
    </div>
  );
};

export default Nav;
