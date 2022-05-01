import { useForm, useStep } from "../../context/index";
import { cepMask } from "../../utils/cepMask";
import { getCep } from "../../utils/getCep";
import { toast } from "react-toastify";

export default function Step2() {
  const { formData, setFormData } = useForm();
  const { cep, address1, address2 } = formData;
  const { step, setStep } = useStep();

  const nextStep = (e) => {
    e.preventDefault();
    if (!cep || !address1 || !address2)
      return toast.error("preencha todos os campos");
    setStep((prevState) => prevState + 1);
    toast.success("Perfeito!");
    console.log("step", step);
  };

  const prevStep = (e) => {
    e.preventDefault();
    setStep((prevState) => prevState - 1);
    console.log("step", step);
  };

  const getCepOnFocus = async () => {
    if (cep.length !== 8) return;
    const response = await getCep(cep);
    if (response.cep) {
      console.log("response", response);
      setFormData({ ...formData, address1: response.logradouro });
    } else if (response.erro) {
      console.log("erro");
      toast.error("CEP não encontrado");
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form action="#" className="form" id="form1">
        <h2 className="form__title">Step {step}</h2>
        <label htmlFor="Cep">Cep</label>
        <input
          type="text"
          placeholder="Cep"
          className="input"
          maxLength="10"
          value={cepMask(cep)}
          name="cep"
          onChange={onChange}
        />

        <label htmlFor="Address 1">Endereço 1</label>
        <input
          type="text"
          placeholder="Addres 1"
          className="input"
          value={address1}
          onFocus={getCepOnFocus}
          name="address1"
          onChange={onChange}
        />

        <label htmlFor="Address 2">Endereço 2</label>
        <input
          type="text"
          placeholder="Addres 2"
          className="input"
          value={address2}
          name="address2"
          onChange={onChange}
        />
        <br />
        <button onClick={prevStep}>Anterior</button>
        <button onClick={nextStep}>Próximo</button>
      </form>
    </>
  );
}
