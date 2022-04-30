import { useForm, useStep } from "../../context/index";
import { phoneMask } from "../../utils/phoneMask";

export default function Step1() {
  const { step, setStep } = useStep();
  const { formData, setFormData } = useForm();
  const { name, secondName, email, telephone } = formData;

  const nextStep = (e) => {
    e.preventDefault();
    if (!name || !secondName || !email || !telephone)
      return alert("preencha todos os campos");
    setStep((prevState) => prevState + 1);
    console.log("step", step);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <form action="#" className="form" id="form1">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          placeholder="Name"
          className="input"
          name="name"
          value={name}
          onChange={onChange}
        />

        <label htmlFor="SecondName">Second Name</label>
        <input
          type="text"
          placeholder="Second name"
          className="input"
          name="secondName"
          value={secondName}
          onChange={onChange}
        />

        <label htmlFor="Email">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="input"
          name="email"
          value={email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <label htmlFor="Telephone">Telephone</label>
        <input
          type="text"
          placeholder="Telephone"
          className="input"
          value={phoneMask(telephone)}
          maxLength="16"
          name="telephone"
          onChange={(e) =>
            setFormData({ ...formData, telephone: e.target.value })
          }
        />
        <br />
        <button onClick={nextStep} type="Submit">
          Próximo
        </button>
      </form>
    </>
  );
}
