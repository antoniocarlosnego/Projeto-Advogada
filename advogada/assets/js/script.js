/* 
   SCRIPT.JS - LÓGICA DE INTERATIVIDADE
   Baseado no padrão Oficina Senac 
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica de Scroll Reveal usando Intersection Observer ---
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ativo');
                // Opcional: parar de observar após ativar para performance
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementosRevelar = document.querySelectorAll('.revelar');
    elementosRevelar.forEach(el => observer.observe(el));

    // --- Suavização de Âncoras (Opcional, já no CSS mas reforçado aqui) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Feedback do Formulário (Simulado) ---
    const form = document.querySelector('.bem-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Dra. Natália entrará em contato em breve.');
            form.reset();
        });
    }
});
