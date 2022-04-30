import { useState } from "react";

export default function ListClients({ clientList }) {
  const [open, setOpen] = useState("false");

  const toggleOpen = () => {
    setOpen("true");
  };

  const handleClick = (e) => {
    if (e.target.children[0] !== undefined && e.target.value === 0) {
      const isHidden = e.target.children[0].hidden;
      e.target.children[0].hidden = !isHidden;
      console.log("i");
    }
  };

  return (
    <>
      <h1>Lista de clientes</h1>
      {clientList !== [] ? (
        <div className="clients-container">
          {clientList.map(
            ({
              id,
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
            }) => (
              <div key={id} className="card-client" onClick={handleClick}>
                <h2 onClick={toggleOpen}>
                  Nome: {name} {secondName}
                </h2>

                <div className={open}>
                  <p>Email: {email}</p>
                  <p>Telefone: {telephone}</p>
                  <p>Cep: {cep}</p>
                  <p>Data de nascimento: {birthDate}</p>
                  <p>Cpf: {cpf}</p>
                  <p>Endereço 1: {address1}</p>
                  <p>Endereço 2: {address2}</p>
                  <p>Renda mensal: {profit}</p>
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <h1>Não há clientes cadastrados ainda.</h1>
      )}
    </>
  );
  // ) : (
  //   <div className="clients-container">
  //     {clientList.map(({ id, name, secondName }) => (
  //       <button onClick={toggleOpen}>{name} {secondName}</button>
  //     ))}
  //   </div>
  // );
}
