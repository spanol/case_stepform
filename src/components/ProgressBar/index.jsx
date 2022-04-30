import React from "react";
import { useStep } from "../../context";

export default function ProgressBar() {
  const {step }= useStep();
  return (
    <div className="progressbar">
      <div
        style={{
          width: step === 1 ? "0%" : step === 2 ? "50%" : "100%",
        }}
      ></div>
    </div>
  );
}
