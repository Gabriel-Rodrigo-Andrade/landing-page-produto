// Função para carregar conteúdo de uma página dentro de #page-content
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

// Quando o DOM estiver pronto, carregamos a home por padrão
document.addEventListener("DOMContentLoaded", () => {
  loadPage("src/pages/home.html");
});
