import { createContext, useContext, useState } from "react";

const Context = createContext();

export default function ContextProvider({ children }) {
  const [step, setStep] = useState(1);
  const [clientList, setClientList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    secondName: "",
    email: "",
    telephone: "",
    cep: "",
    birthDate: "",
    cpf: "",
    address1: "",
    address2: "",
    profit: "",
  });
  return (
    <Context.Provider
      value={{
        step,
        setStep,
        formData,
        setFormData,
        clientList,
        setClientList,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useStep() {
  const context = useContext(Context);
  if (!context) throw new Error("useStep must be used within a Provider");
  const { step, setStep } = context;
  return { step, setStep };
}

export function useForm() {
  const context = useContext(Context);
  if (!context) throw new Error("useForm must be used within a Provider");
  const { formData, setFormData } = context;
  return { formData, setFormData };
}

export function useClients() {
  const context = useContext(Context);
  if (!context) throw new Error("useForm must be used within a Provider");
  const { clientList, setClientList } = context;
  return { clientList, setClientList };
}
