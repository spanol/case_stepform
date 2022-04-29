import React from "react";
import { useForm, useStep } from "../../context/index";
import Buttons from "../Buttons";

export default function Step2() {
  const { formData, setFormData } = useForm();
  const { cep, address1, address2 } = formData;
  const { step, setStep } = useStep();
  // console.log(formData)

  const nextStep = (e) => {
    e.preventDefault();
    if(!cep || !address1 || !address2) return alert("Preencha todos os campos");
    setStep((prevState) => prevState + 1);
    console.log("step", step);
  };

  const prevStep = (e) => {
    e.preventDefault();
    setStep((prevState) => prevState - 1);
    console.log("step", step);
  };

  return (
    <div className="form-container">
      <form action="#" className="form" id="form1">
        <h2 className="form__title">Step {step}</h2>
        <label htmlFor="Cep">Cep</label>
        <input
          type="text"
          placeholder="Cep"
          className="input"
          value={cep}
          onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
        />

        <label htmlFor="Address 1">Address 1</label>
        <input
          type="text"
          placeholder="Addres 1"
          className="input"
          value={address1}
          onChange={(e) =>
            setFormData({ ...formData, address1: e.target.value })
          }
        />

        <label htmlFor="Address 2">Address 2</label>
        <input
          type="text"
          placeholder="Addres 2"
          className="input"
          value={address2}
          onChange={(e) =>
            setFormData({ ...formData, address2: e.target.value })
          }
        />
        <br />
        <button onClick={prevStep}>Prev</button>
        <button onClick={nextStep}>Next</button>
        {/* <Buttons /> */}
      </form>
    </div>
  );
}
