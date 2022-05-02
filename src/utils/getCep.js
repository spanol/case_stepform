import axios from "axios";
export const getCep = async (cep) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`, {
      mode: "no-cors",
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
