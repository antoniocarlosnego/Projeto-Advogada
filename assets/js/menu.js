/* 
   MENU.JS - COMPONENTE DE NAVEGAÇÃO
   Injeta a navbar dinamicamente para facilitar a manutenção.
*/

const renderNavbar = () => {
    const navbarContainer = document.getElementById('navbar-principal-container');
    
    if (!navbarContainer) return;

    const navbarHTML = `
        <nav class="bem-navbar">
            <a href="index.html" class="bem-navbar__brand">
                NATÁLIA DOURADO
                <span>Advocacia</span>
            </a>
            <ul class="bem-navbar__menu">
                <li class="bem-navbar__item"><a href="#servicos" class="bem-navbar__link">Áreas de Atuação</a></li>
                <li class="bem-navbar__item"><a href="#sobre" class="bem-navbar__link">Sobre</a></li>
                <li class="bem-navbar__item"><a href="#blog" class="bem-navbar__link">Blog</a></li>
                <li class="bem-navbar__item"><a href="#faq" class="bem-navbar__link">Dúvidas</a></li>
                <li class="bem-navbar__item"><a href="#contato" class="bem-btn bem-btn--primary">Consultoria</a></li>
            </ul>
        </nav>
    `;

    navbarContainer.innerHTML = navbarHTML;
};

// Executa a função quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', renderNavbar);
