/* 
   NAVBAR.JS - INJEÇÃO DINÂMICA DA NAVEGAÇÃO
   Baseado no padrão Oficina Senac 
*/

document.addEventListener('DOMContentLoaded', () => {
    const navbarHTML = `
    <nav class="bem-navbar">
        <a href="index.html" class="bem-navbar__brand">
            NATÁLIA DOURADO
            <span>Advocacia</span>
        </a>
        <ul class="bem-navbar__menu">
            <li class="bem-navbar__item"><a href="index.html#servicos" class="bem-navbar__link">Áreas de Atuação</a></li>
            <li class="bem-navbar__item"><a href="index.html#sobre" class="bem-navbar__link">Sobre</a></li>
            <li class="bem-navbar__item"><a href="index.html#faq" class="bem-navbar__link">Dúvidas</a></li>
            <li class="bem-navbar__item"><a href="index.html#contato" class="bem-btn bem-btn--primary">Consultoria</a></li>
        </ul>
    </nav>
    `;

    const container = document.getElementById('navbar-principal-container');
    if (container) {
        container.innerHTML = navbarHTML;
    }
});
