import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import { 
  getFirestore, 
  doc, 
  setDoc 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// CONFIG

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTiRnkwYQqo9YqtOH_jWqadfrSt6Jbg4g",
  authDomain: "meu-site-28be5.firebaseapp.com",
  projectId: "meu-site-28be5",
  storageBucket: "meu-site-28be5.firebasestorage.app",
  messagingSenderId: "865403243521",
  appId: "1:865403243521:web:96d4a8a02b17184dc1c400",
  measurementId: "G-K2CR5XB947"
};

// INT

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
console.log("AUTH:", auth);

// CADASTRO E LOGIN

window.entrar = function () {
  alert("ENTRAR OK");
};

window.cadastrar = function () {
  alert("CADASTRAR OK");
};

// BOTÃO TESTE
window.clicar = function () {
  alert("Você clicou no botão!");
};

// CADASTRAR
window.cadastrar = async function () {
  let email = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  let nome = prompt("Digite seu nome:");
  let foto = prompt("Cole o link da sua foto (opcional):");

if (!foto) {
  foto = "https://i.imgur.com/default.png"; // imagem padrão
}

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, senha);

    await setDoc(doc(db, "usuarios", userCred.user.uid), {
      nome,
      foto,
      tipo: "user"
    });

    alert("Conta criada!");
  } catch (error) {
    alert(error.message);
  }
};

// LOGIN
window.entrar = async function () {
  let email = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  try {
    await signInWithEmailAndPassword(auth, email, senha);
    alert("Login feito!");
    window.location.href = "index.html";
  } catch (error) {
    alert(error.message);
  }
};

// CRIAR CONTA

await setDoc(doc(db, "usuarios", userCred.user.uid), {
  nome,
  foto
});

// SAIR
window.sair = async function () {
  await signOut(auth);
  window.location.href = "login.html";
};