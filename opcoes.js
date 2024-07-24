const prompt = require("prompt-sync")();

const votos = [];

const criar = () => {
  let voto = +prompt("Escolha a opção de seu candidato:\n 1 \n 2 \n 3 \n 4 \n")

  votos.push(voto)

    console.log("Seu voto foi confirmado.")
}
 

const listar = () => {
  votos.forEach((votos, indice) => {
    console.log(`${indice + 1}. ${votos}: `);
    
  });
};

const atualizar = () => {
  listar();
   
  let indice = prompt("Qual indice deseja atualizar?")

  let atualizado = prompt("Qual o novo voto?")

  votos[--indice] = atualizado
};

const remover = () => {
  listar();

  let indice = prompt("Qual indice sera removido? ");

  votos.splice(--indice, 1);

  console.log("Removido");
};

module.exports = {
  criar,
  atualizar,
  remover,
  listar,
};