import { useStep } from "../../context";

export default function Success() {
const { setStep } = useStep();

    const resetStep = () => {
        setStep(1);
    }

  return (
    <>
    <div>Cadastro concluido com sucesso!!</div>
    <button onClick={resetStep}>Retornar ao inicio.</button>
    </>
  )
}
