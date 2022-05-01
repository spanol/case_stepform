import { cepMask } from "../../utils/cepMask";
import { phoneMask } from "../../utils/phoneMask";

export default function ListClients({ clientList }) {
  const hideClients = (event) => {
    if (event.target.children[0] !== undefined && event.target.value === 0) {
      const isHidden = event.target.children[0].hidden;
      event.target.children[0].hidden = !isHidden;
    }
  };
  return (
    <>
      <h1>Lista de clientes</h1>
      {clientList.length !== 0 ? (
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
              <ul className="card-client">
                <li key={id} onClick={(event) => hideClients(event)}>
                  Nome: {name} {secondName}
                  <span hidden={true}>
                    <div>
                      <ul>
                        <li>Email: {email}</li>
                        <li>Telefone: {phoneMask(telephone)}</li>
                      </ul>
                      <ul>
                        <li>Cep: {cepMask(cep)}</li>
                        <li>Endereço 1: {address1}</li>
                        <li>Endereço 2: {address2}</li>
                      </ul>
                      <ul>
                        <li>Data de nascimento: {birthDate}</li>
                        <li>Cpf: {cpf}</li>
                        <li>Renda mensal: {profit}</li>
                      </ul>
                    </div>
                  </span>
                </li>
              </ul>
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
