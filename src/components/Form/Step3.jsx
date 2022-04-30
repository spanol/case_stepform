import { useForm, useClients, useStep } from "../../context/index";
import { cpfMask } from "../../utils/cpfMask";
import { getMoney, formatReal } from "../../utils/moneyMasks";

export default function Step3() {
  const { formData, setFormData } = useForm();
  const { setClientList } = useClients();
  const { step, setStep } = useStep();
  const {
    name,
    secondName,
    email,
    telephone,
    cep,
    birthDate,
    cpf,
    address1,
    address2,
    profit,
  } = formData;

  const addClient = (e) => {
    e.preventDefault();
    if (
      !name ||
      !secondName ||
      !email ||
      !telephone ||
      !cep ||
      !birthDate ||
      !cpf ||
      !address1 ||
      !address2 ||
      !profit
    )
      return alert("Preencha todos os campos");
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
    setClientList((prevState) => [newClient, ...prevState]);
    setFormData({
      ...formData,
      name: "",
      secondName: "",
      email: "",
      telephone: "",
      cep: "",
      birthDate: "",
      cpf: "",
      address1: "",
      address2: "",
      profit: "0",
    });
  };

  const prevStep = (e) => {
    e.preventDefault();
    setStep((prevState) => prevState - 1);
  };

  return (
    <>
      <form onSubmit={addClient} action="#" className="form" id="form1">
        <h2 className="form__title">Step {step}</h2>
        <label htmlFor="Birthdate">Data de nascimento</label>
        <input
          type="date"
          placeholder="Birthdate"
          className="input"
          value={birthDate}
          maxLength="4"
          onChange={(e) =>
            setFormData({ ...formData, birthDate: e.target.value })
          }
        />

        <label htmlFor="Cpf">Cpf</label>
        <input
          type="text"
          placeholder="Cpf"
          className="input"
          maxLength="14"
          value={cpfMask(cpf)}
          onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
        />

        <label htmlFor="Profit">Renda mensal</label>
        <input
          type="text"
          placeholder="Profit"
          className="input"
          value={formatReal(getMoney(profit))}
          onChange={(e) => setFormData({ ...formData, profit: e.target.value })}
        />
        <br />
        <button type="submit" onClick={prevStep}>
          Anterior
        </button>
        <button type="submit">Finalizar</button>
      </form>
    </>
  );
}
