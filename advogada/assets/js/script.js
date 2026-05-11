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

    // --- Lógica de Contadores Animados ---
    const iniciarContador = (elemento) => {
        const target = parseInt(elemento.getAttribute('data-target'));
        const prefix = elemento.getAttribute('data-prefix') || '';
        const suffix = elemento.getAttribute('data-suffix') || '';
        const duracao = 2000; // 2 segundos
        const incremento = target / (duracao / 16); // 60fps aprox
        let atual = 0;

        const atualizar = () => {
            atual += incremento;
            if (atual < target) {
                elemento.innerText = prefix + Math.ceil(atual) + suffix;
                requestAnimationFrame(atualizar);
            } else {
                elemento.innerText = prefix + target + suffix;
            }
        };

        atualizar();
    };

    const observerContador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                iniciarContador(entry.target);
                observerContador.unobserve(entry.target); // Executa apenas uma vez
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stats-bar__number').forEach(num => {
        observerContador.observe(num);
    });
});
