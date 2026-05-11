/* 
   FOOTER.JS - INJEÇÃO DINÂMICA DO RODAPÉ
   Baseado no padrão Oficina Senac 
*/

document.addEventListener('DOMContentLoaded', () => {
    const footerHTML = `
    <div class="bem-container">
        <div class="bem-grid-auto">
            <div style="text-align: left;">
                <h3 style="font-family: var(--bem-font-heading); color: var(--bem-primary); margin-bottom: 1rem;">NATÁLIA DOURADO</h3>
                <p style="font-size: 0.9rem; color: var(--bem-text-muted); line-height: 1.6;">Advocacia especializada em direitos das mulheres, com atendimento humanizado e estratégico em todo o território nacional.</p>
            </div>
            <div>
                <h4 style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; color: var(--bem-primary);">Links Rápidos</h4>
                <ul style="list-style: none; padding: 0; font-size: 0.9rem; line-height: 2;">
                    <li><a href="index.html#hero">Início</a></li>
                    <li><a href="index.html#servicos">Serviços</a></li>
                    <li><a href="index.html#sobre">Sobre</a></li>
                    <li><a href="index.html#contato">Contato</a></li>
                </ul>
            </div>
            <div>
                <h4 style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; color: var(--bem-primary);">Contato</h4>
                <p style="font-size: 0.9rem; color: var(--bem-text-muted);">WhatsApp: (11) 99804-4376</p>
                <p style="font-size: 0.9rem; color: var(--bem-text-muted);">E-mail: contato@nataliadourado.adv.br</p>
            </div>
        </div>
        <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--bem-border); font-size: 0.75rem; color: var(--bem-text-muted);">
            © 2026 Dra. Natália Dourado. Todos os direitos reservados. OAB/SP 474.045
        </div>
    </div>
    `;

    const container = document.getElementById('footer-container');
    if (container) {
        container.innerHTML = footerHTML;
    }
});
