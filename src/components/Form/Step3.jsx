import { useForm, useClients, useStep } from "../../context/index";
import { cpfMask } from "../../utils/cpfMask";
import { getMoney, formatReal } from "../../utils/moneyMasks";
import { toast } from "react-toastify";

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
      return toast.error("preencha todos os campos");
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
    toast.success("Concluido!");
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

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          name="birthDate"
          onChange={onChange}
        />

        <label htmlFor="Cpf">Cpf</label>
        <input
          type="text"
          placeholder="Cpf"
          className="input"
          maxLength="14"
          value={cpfMask(cpf)}
          name="cpf"
          onChange={onChange}
        />

        <label htmlFor="Profit">Renda mensal</label>
        <input
          type="text"
          placeholder="Profit"
          className="input"
          value={formatReal(getMoney(profit))}
          name="profit"
          onChange={onChange}
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
