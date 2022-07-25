import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav/Nav";
import ChoosePlan from "./components/ChoosePlan/ChoosePlan";
import CreatePlan from "./components/CreatePlan/CreatePlan";
import { PlanContext } from "./Contexts/PlanContext";

const App = () => {
  const [choosing, setChoosing] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(false);

  return (
    <div className="App" data-theme={theme}>
      <PlanContext.Provider
        value={{ loading, setLoading, choosing, setChoosing, theme, setTheme }}
      >
        <Nav />
        {choosing ? <ChoosePlan /> : <CreatePlan />}
      </PlanContext.Provider>
    </div>
  );
};

export default App;
