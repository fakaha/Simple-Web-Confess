let nama = prompt("Masukkan nama kamu");

if (nama == "" || nama == null) {
  const greeting = document.querySelector("h1");
  greeting.innerText = "Halo pemuja rahasia";
} else {
  const greeting = document.querySelector("h1");
  greeting.innerText = "Halo " + nama;
}

function goto(confess) {
  window.open(confess);
}

const no = document.getElementById("noButton");
no.addEventListener("click", moveClick);

function moveClick() {
  const i = Math.floor(Math.random() * 50) + 1;
  const j = Math.floor(Math.random() * 50) + 1;

  no.style.left = i + "%";
  no.style.left = j + "%";
}
