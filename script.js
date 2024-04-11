// Récupération des éléments
const value = document.querySelector(".value");
const buttons = document.querySelectorAll(".btn");

// Création de la variable number réglée de base à 0
let number = 0;

buttons.forEach((button) => {
  // Ecoute de l'événement click sur un bouton
  button.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      number--;
    } else if (styles.contains("increase")) {
      number++;
    } else {
      number = 0;
    }
    value.textContent = number;
    if (number > 0) {
      value.style.color = "green";
    } else if (number < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
  });
});
