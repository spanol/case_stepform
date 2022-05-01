export const cepMask = (cep) => {
    if(cep.length !== 8) return;
  const cepNumber = cep.replace(/\D/g, '');
  const cepFormatted = cepNumber
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1-$2');
  return cepFormatted;
 
};
