document.addEventListener('DOMContentLoaded', () => {
    const btnMenu    = document.querySelector('#menu-toggle');
    const listaLinks = document.querySelector('#linksLogo ul');
    if (!btnMenu || !listaLinks) {
      console.error('Menu-toggle ou linksLogo não encontrados');
      return;
    }
    btnMenu.addEventListener('click', () => {
      listaLinks.classList.toggle('show');
    });
  });
  