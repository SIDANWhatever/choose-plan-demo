import { useState, useEffect } from "react";
import axios from "axios";
import "./choosePlan.css";
import Tick from "../../Assets/Tick";
import Cross from "../../Assets/Cross";
import Spinner from "./Spinner/Spinner";

const ChoosePlan = () => {
  const [plans, setPlans] = useState(false);
  const [checked, setChecked] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getAllPlan = () => {
    setLoading(true);
    axios
      .get("http://localhost:3001/plans/")
      .then((res) => {
        setPlans(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error in obtaining plan");
        setLoading(false);
      });
  };

  const tickCross = (bool) => {
    return bool ? <Tick /> : <Cross />;
  };

  const checkChecked = (item_id) => {
    if (checked === item_id) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    getAllPlan();
  }, []);

  return (
    <div className="choose">
      {loading ? (
        <Spinner />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="ch-box">
          <div className="ch-content">
            <div className="ch-title">Choose a plan</div>
            <div className="ch-plans">
              <div className="ch-p-columns">
                <div className="ch-p-title"> </div>
                <div className="ch-p-rows">General</div>
                <div className="ch-p-rows">Specialist</div>
                <div className="ch-p-rows">Physiotherapy</div>
              </div>
              {plans &&
                plans.map((plan) => (
                  <div key={plan.id} className="ch-p-columns">
                    <div className="ch-p-title">{plan.name}</div>
                    <div className="ch-p-rows">{tickCross(plan.general)}</div>
                    <div className="ch-p-rows">
                      {tickCross(plan.specialist)}
                    </div>
                    <div className="ch-p-rows">
                      {tickCross(plan.physiotherapy)}
                    </div>
                    <div className="ch-p-choice">
                      HK${plan.feePerMonth}
                      <div className="ch-mobile"> /Month</div>
                    </div>
                    <input
                      type="radio"
                      className="ch-input"
                      checked={checkChecked(plan.id)}
                      onChange={() => {
                        setChecked(plan.id);
                      }}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChoosePlan;
