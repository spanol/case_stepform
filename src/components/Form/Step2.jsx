import { useForm, useStep } from "../../context/index";
import { cepMask } from "../../utils/cepMask";
import { getCep } from "../../utils/getCep";

export default function Step2() {
  const { formData, setFormData } = useForm();
  const { cep, address1, address2 } = formData;
  const { step, setStep } = useStep();

  const nextStep = (e) => {
    e.preventDefault();
    if (!cep || !address1 || !address2)
      return alert("Preencha todos os campos");
    setStep((prevState) => prevState + 1);
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
    if (response) {
      setFormData({ ...formData, address1: response.logradouro });
    } else{
      alert("CEP não encontrado");
    }
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
          onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
        />

        <label htmlFor="Address 1">Endereço 1</label>
        <input
          type="text"
          placeholder="Addres 1"
          className="input"
          value={address1}
          onFocus={getCepOnFocus}
          onChange={(e) =>
            setFormData({ ...formData, address1: e.target.value })
          }
        />

        <label htmlFor="Address 2">Endereço 2</label>
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
        <button onClick={prevStep}>Anterior</button>
        <button onClick={nextStep}>Próximo</button>
      </form>
    </>
  );
}
