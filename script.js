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

  users.push({ user: user, pass: pass });
  saveUsers(users);

  alert("Conta criada!");
}

// LOGIN
function entrar() {
  let user = document.getElementById("usuario").value;
  let pass = document.getElementById("senha").value;

  let users = getUsers();

  let encontrado = users.find(u => u.user === user && u.pass === pass);

  if (encontrado) {
    localStorage.setItem("logado", "true");
    localStorage.setItem("usuarioLogado", user);

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
  } else {
    let nome = localStorage.getItem("usuarioLogado");
    document.getElementById("user").innerText = "Olá, " + nome;

    let loginBtn = document.getElementById("loginBtn");
    if (loginBtn) loginBtn.style.display = "none";
  }
}
    // 👇 ESCONDE O BOTÃO LOGIN
    document.getElementById("loginBtn").style.display = "none";
  

if (logado === "true") {
  document.getElementById("loginBtn").style.display = "none";
} else {
  document.getElementById("loginBtn").style.display = "block";
}

function sair() {
  localStorage.removeItem("logado");
  localStorage.removeItem("usuarioLogado");

  window.location.href = "login.html";
}