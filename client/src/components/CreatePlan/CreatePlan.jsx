import { useState, useContext } from "react";
import axios from "axios";
import "./createPlan.css";
import { PlanContext } from "../../Contexts/PlanContext";

const CreatePlan = () => {
  const [name, setName] = useState("");
  const [general, setGeneral] = useState(false);
  const [specialist, setSpecialist] = useState(false);
  const [physiotherapy, setPhysiotherapy] = useState(false);
  const [fee, setFee] = useState(0);

  const { loading, setLoading, setChoosing } = useContext(PlanContext);

  const createPlan = () => {
    setChoosing(true);
    setLoading(true);
    axios
      .post("http://localhost:3001/plans/", {
        name: name,
        general: general,
        specialist: specialist,
        physiotherapy: physiotherapy,
        feePerMonth: fee,
      })
      .then((res) => {
        console.log("Successful creation");
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error: ", err.message);
        setLoading(false);
      });
  };

  return (
    <div className="create">
      <div className="cr-box">
        <div className="cr-content">
          <div className="cr-title">Create a plan</div>
          <br />
          <div className="cr-plans">
            <div className="cr-p-columns">
              <div className="cr-p-rows">Name</div>
              <div className="cr-p-rows">General</div>
              <div className="cr-p-rows">Specialist</div>
              <div className="cr-p-rows">Physiotherapy</div>
              <div className="cr-p-rows">Fee Per Month (HKD)</div>
            </div>
            <div className="cr-p-columns">
              <div className="cr-p-rows">
                <input
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="cr-p-rows">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setGeneral(e.target.checked);
                  }}
                />
              </div>
              <div className="cr-p-rows">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setSpecialist(e.target.checked);
                  }}
                />
              </div>
              <div className="cr-p-rows">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setPhysiotherapy(e.target.checked);
                  }}
                />
              </div>
              <div className="cr-p-rows">
                <input
                  type="number"
                  onChange={(e) => {
                    setFee(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="cr-submit"
          onClick={() => {
            createPlan();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreatePlan;
