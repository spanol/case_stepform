import { useEffect } from "react";
import Step1 from "../../components/Form/Step1";
import Step2 from "../../components/Form/Step2";
import Step3 from "../../components/Form/Step3";
import Success from "../../components/Form/Success";
import ProgressBar from "../../components/ProgressBar";
import {  useStep, useClients } from "../../context/index";

export default function CreateClient() {
  const { clientList } = useClients();
  const { step } = useStep();

  const renderSwitch = (step) => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Success />;
      default:
        return <Step1 />;
    }
  };

  useEffect(() => {
    localStorage.setItem("Clients", JSON.stringify(clientList));
  }, [clientList]);

  return (
    <>
      <div className="flex page">
        <div className="form-container">
        <h1 className="title">Criar Cliente</h1>
          <ProgressBar />
          {renderSwitch(step)}
        </div>
      </div>
    </>
  );
}
