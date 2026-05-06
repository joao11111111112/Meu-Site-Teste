function clicar() {
  alert("Você clicou no botão!");
}

// PEGAR USUÁRIOS
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// SALVAR USUÁRIOS
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// CADASTRAR
function cadastrar() {
  let user = document.getElementById("usuario").value;
  let pass = document.getElementById("senha").value;

  if (!user || !pass) {
    alert("Preencha tudo!");
    return;
  }

  let users = getUsers();

  let existe = users.find(u => u.user === user);

  if (existe) {
    alert("Usuário já existe!");
    return;
  }

  let tipo = "user";

  if (user === "admin") {
    tipo = "admin";
  }

  users.push({
    user: user,
    pass: pass,
    tipo: tipo
  });

  saveUsers(users);
  alert("Conta criada!");
}

// LOGIN
function entrar() {
  let user = document.getElementById("usuario").value;
  let pass = document.getElementById("senha").value;

  let users = getUsers();

  let encontrado = users.find(
    u => u.user === user && u.pass === pass
  );

  if (encontrado) {
    localStorage.setItem("logado", "true");
    localStorage.setItem("usuarioLogado", user);
    localStorage.setItem("tipoUsuario", encontrado.tipo);

    alert("Login feito!");
    window.location.href = "index.html";
  } else {
    alert("Dados incorretos!");
  }
}

// VERIFICAR LOGIN
function verificarLogin() {
  let logado = localStorage.getItem("logado");

  if (logado !== "true") {
    window.location.href = "login.html";
    return;
  }

  let nome = localStorage.getItem("usuarioLogado");
  let tipo = localStorage.getItem("tipoUsuario");

  let userElement = document.getElementById("user");
  if (userElement) {
    userElement.innerText = "Olá, " + nome;
  }

  let loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.style.display = "none";
  }

  if (tipo === "admin") {
    let adminArea = document.getElementById("adminArea");
    if (adminArea) {
      adminArea.style.display = "block";
    }
  }
}

// SAIR
function sair() {
  localStorage.removeItem("logado");
  localStorage.removeItem("usuarioLogado");
  localStorage.removeItem("tipoUsuario");

  window.location.href = "login.html";
}