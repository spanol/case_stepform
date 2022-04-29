import { useForm, useStep } from "../../context/index";
import Buttons from "../Buttons";

export default function Step1() {
  const { step, setStep } = useStep();
  const { formData, setFormData } = useForm();
  const {  name, secondName, email, telephone } = formData;
  // console.log(formData)
  const nextStep = (e) => {
    e.preventDefault();
    if (!name || !secondName || !email || !telephone) return alert("preencha todos os campos");
    setStep((prevState) => prevState + 1);
    console.log("step", step);
  };

  return (
    <div className="form-container">
      <form action="#" className="form" id="form1">
        <h2 className="form__title">Step</h2>
        <label htmlFor="Name">Name</label>
        <input type="text" 
        placeholder="Name" 
        className="input" 
        value={name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        />

        <label htmlFor="SecondName">Second Name</label>
        <input
          type="text"
          placeholder="Second name"
          className="input"
          value={secondName}
          onChange={(e) => setFormData({...formData, secondName: e.target.value})} 
        />

        <label htmlFor="Email">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />

        <label htmlFor="Telephone">Telephone</label>
        <input
          type="text"
          placeholder="Telephone"
          className="input"
          value={telephone}
          onChange={(e) => setFormData({...formData, telephone: e.target.value})}        />
        <br />
      </form>
      <button onClick={nextStep}>Next</button>
      {/* <Buttons /> */}
    </div>
  );
}
