/* Exporte da uma das funções criadas. Ex:

function minhaFuncao() {}
function minhaOutraFuncao {}

module.exports = {
  minhaFuncao,
  minhaOutraFuncao
}

*/


function verificarUsuario(email) {
 return new Promise((resolve, reject) => { // aqui ele vai ve se o email ta certo
  if (email === "sucesso@mail.com") {
  resolve("Usuário válido");
  } else {
  reject("Usuário inválido");
  }
 });
}

function verificarSenha(email, senha) {
  return new Promise((resolve, reject) => { // conferindo a senha tbm
  if (email === "sucesso@mail.com" && senha === "123456") {
  resolve("Senha correta");
  } else {
  reject("Usuário ou senha inválidos");
  }
  });
}

function login(email, senha) { // primeiro ele olha o email e depois a senha
 return verificarUsuario(email)
  .then(() => {
  return verificarSenha(email, senha);
  }) .then(() => {// se veio até aqui ta dandotudo certo
  return "Login realizado com sucesso";
  }) .catch((erro) => {// se alguma coisa tiver errada aparece isso
    throw new Error("Usuário ou senha inválidos");
  });
}

module.exports = {
 verificarUsuario, verificarSenha,
 login
};



