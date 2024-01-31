function validateForm() {
  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var email = document.getElementById("email").value;
  var classe = document.querySelector('input[name="classe"]:checked');
  var axe = document.getElementById("axe").value;

  if (
    nom === "" ||
    prenom === "" ||
    email === "" ||
    classe === null ||
    axe === ""
  ) {
    alert("Veuillez remplir tous les champs obligatoires.");
    return false;
  }

  alert("Inscription réussie !");
  return true;
}
