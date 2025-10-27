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

    // --- Toggle de Detalhes com Animação ---
    const botaoNft = document.getElementById('botao-toggle-nft');
    const descricaoNft = document.getElementById('descricao-nft');

    if (botaoNft && descricaoNft) {
        descricaoNft.style.maxHeight = '0';
        descricaoNft.style.overflow = 'hidden';
        descricaoNft.style.transition = 'max-height 0.5s ease-out';
        descricaoNft.style.padding = '0 15px';

        botaoNft.addEventListener('click', function() {
            if (descricaoNft.style.maxHeight === '0px' || descricaoNft.style.maxHeight === '') {
                // Revela a descrição
                descricaoNft.style.maxHeight = descricaoNft.scrollHeight + 'px'; // Ajusta a altura para o conteúdo
                botaoNft.textContent = 'Esconder Detalhes NFT';
            } else {
                // Esconde a descrição
                descricaoNft.style.maxHeight = '0';
                botaoNft.textContent = 'Mostrar Detalhes NFT';
            }
        });
    }

    const galeriaImagens = document.querySelectorAll('.galeria-item img');

    galeriaImagens.forEach(img => {
        img.addEventListener('click', function() {
            alert('Você clicou em: ' + this.alt);
        });
    });
});