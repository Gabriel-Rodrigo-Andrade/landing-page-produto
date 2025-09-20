// vai carregar um partial HTML dentro de um elemento
function loadPartial(id, filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ao carregar ${filePath}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => {
      console.error("Erro ao carregar partial:", error);
    });
}
document.addEventListener("DOMContentLoaded", () => {
  loadPartial("header", "src/partials/header.html");
  loadPartial("footer", "src/partials/footer.html");
});
