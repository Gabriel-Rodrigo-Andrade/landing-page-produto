// Vai carregar conteúdo de uma página dentro do index
function loadPage(filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ao carregar ${filePath}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("page-content").innerHTML = data;
    })
    .catch(error => console.error("Erro ao carregar página:", error));
}

document.addEventListener("DOMContentLoaded", () => {
  loadPage("src/pages/home.html");
});