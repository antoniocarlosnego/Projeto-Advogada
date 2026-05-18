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

    // --- Feedback do Formulário (Envio transparente via EmailJS) ---
    const form = document.querySelector('#contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            
            submitBtn.disabled = true;
            submitBtn.innerText = 'Enviando mensagem...';

            // Parâmetros que vão coincidir com as variáveis no seu template do EmailJS
            // O nome das chaves deve ser exatamente igual às variáveis {{nome_variavel}} no EmailJS
            const templateParams = {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                telefone: document.getElementById('telefone').value,
                mensagem: document.getElementById('mensagem').value
            };

            // Substitua 'SEU_SERVICE_ID' e 'SEU_TEMPLATE_ID' pelas IDs corretas
            emailjs.send('service_vewnu6y', 'template_41n2dzy', templateParams)
                .then(function(response) {
                    console.log('SUCESSO!', response.status, response.text);
                    alert('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
                    form.reset();
                }, function(error) {
                    console.log('FALHA...', error);
                    alert('Houve um erro ao enviar sua mensagem. Por favor, tente novamente ou use o WhatsApp.');
                })
                .finally(function() {
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalBtnText;
                });
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
