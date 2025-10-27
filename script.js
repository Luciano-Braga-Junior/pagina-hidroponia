document.addEventListener('DOMContentLoaded', function() {

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav-menu-active');
        });
    }

    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('header').offsetHeight || 0),
                    behavior: 'smooth'
                });

                if (navMenu.classList.contains('nav-menu-active')) {
                    navMenu.classList.remove('nav-menu-active');
                }
            }
        });
    });

    // --- 3. Toggle de Detalhes com Animação ---
    const todosBotoesToggle = document.querySelectorAll('.btn-toggle');

    todosBotoesToggle.forEach(botao => {

        const descricao = botao.nextElementSibling;

        // Verifica se a descrição foi encontrada e tem a classe esperada
        if (descricao && descricao.classList.contains('detalhes-ocultos')) {

            descricao.style.maxHeight = '0';
            descricao.style.overflow = 'hidden';
            descricao.style.transition = 'max-height 0.5s ease-out';
            descricao.style.padding = '0 15px';

            botao.addEventListener('click', function() {
                if (descricao.style.maxHeight === '0px' || descricao.style.maxHeight === '') {
                    // Revela a descrição
                    descricao.style.maxHeight = descricao.scrollHeight + 'px';
                    botao.textContent = 'Esconder Detalhes';
                } else {
                    descricao.style.maxHeight = '0';
                    botao.textContent = 'Mostrar Detalhes';
                }
            });
        } else {
            console.warn("Aviso: Botão toggle encontrado, mas o elemento seguinte não é a descrição esperada.", botao);
        }
    });

    const galeriaImagens = document.querySelectorAll('.galeria-item img');

    galeriaImagens.forEach(img => {
        img.addEventListener('click', function() {
            alert('Você clicou em: ' + this.alt);
        });
    });
});