
function searchProducts() {
  const searchBar = document.getElementById('searchBar').value.toLowerCase();
  const servicos = document.querySelectorAll('.servico');

  servicos.forEach((servico) => {
    const titulo = servico.querySelector('h2').textContent.toLowerCase();
    const descricao = servico.querySelector('p').textContent.toLowerCase();

    if (titulo.includes(searchBar) || descricao.includes(searchBar)) {
      servico.style.display = 'block';
    } else {
      servico.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('searchBar').focus();
});