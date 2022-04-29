import { useState } from "react";
import {  useForm, useStep } from "../../context/index";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function Form() {
  const { step } = useStep();

  const renderSwitch = (step) => {
    switch (step) {
      case 1:
        return <Step1/>;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
        case 4:
          return <h1>Success</h1>;
      default:
        return <Step1 />;
    }
  };

  return renderSwitch(step)
}
