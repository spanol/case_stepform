import React from "react";
import { useForm, useClients, useStep } from "../../context/index";
import Buttons from "../Buttons";

// import useForm
export default function Step3() {
  const { formData, setFormData } = useForm();
  const { name, secondName, email, telephone, cep, birthDate, cpf, address1, address2, profit } = formData;
  const { clientList, setClientList } = useClients();
  const {step ,setStep } = useStep()
  // console.log(formData)

  const addClient = (e) => {
    e.preventDefault();
    if (
      name &&
      secondName &&
      email &&
      telephone &&
      cep &&
      birthDate &&
      cpf &&
      address1 &&
      address2 &&
      profit
    ) {
      setStep((prevState) => prevState + 1);
      const newClient = {
        id: new Date().getUTCMilliseconds(),
        name: name,
        secondName: secondName,
        email: email,
        telephone: telephone,
        cep: cep,
        birthDate: birthDate,
        cpf: cpf,
        address1: address1,
        address2: address2,
        profit: profit,
      };
      setClientList((prevClient) => [newClient, ...prevClient]);
      console.log(newClient);
      setFormData("");
      const setClient = localStorage.setItem("clientList", JSON.stringify(clientList))
    } else {
      alert("Preencha todos os campos");
    }
  };


  return (
    <div className="form-container">
      <form action="#" className="form" id="form1">
        <h2 className="form__title">Step {step}</h2>
        <label htmlFor="Birthdate">Data de nascimento</label>
        <input
          type="date"
          placeholder="Birthdate"
          className="input"
          onChange={(e) =>
            setFormData({ ...formData, birthDate: e.target.value })
          }
        />

        <label htmlFor="Cpf">Cpf</label>
        <input 
        type="text" 
        placeholder="Cpf" 
        className="input"
        onChange={(e) => setFormData({...formData, cpf: e.target.value})}
        />

        <label htmlFor="Profit">Renda mensal</label>
        <input type="text" placeholder="Profit" className="input"
        onChange={(e) => setFormData({...formData, profit: e.target.value})}
        />
        <br />
        <Buttons />
      </form>
    </div>
  );
}
