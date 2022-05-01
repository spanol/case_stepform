import { useStep } from "../../context";

export default function Success() {
  const { setStep } = useStep();

  const resetStep = () => {
    setStep(1);
  };

  return (
    <>
      <div>Cadastro concluido com sucesso!!</div>

      <div className="flex" style={{ flexDirection: 'column'}}>
      <span>Em breve enviaremos um email com instruções dos passos seguintes</span>
      <button onClick={resetStep}>Retornar ao inicio.</button>
      </div>
    </>
  );
}
