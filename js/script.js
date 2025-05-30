// Implementação de Scroll Suave

document.querySelectorAll('#main-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Opcional: Adicionar classe 'active' ao link do menu correspondente à seção visível
// (Implementação mais complexa com Intersection Observer pode ser adicionada se necessário)

// Opcional: Validação de formulário (já feita com 'required' no HTML)

// Opcional: Funcionalidade do menu hambúrguer para mobile (se for implementar)
// const hamburger = document.getElementById('hamburger-icon');
// const nav = document.getElementById('main-nav');
// if (hamburger && nav) {
//     hamburger.addEventListener('click', () => {
//         nav.classList.toggle('active'); // Adicionar/remover classe para mostrar/esconder
//     });
// }

// Inserir ano atual no footer automaticamente
const footerYear = document.querySelector('#main-footer p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = `&copy; ${currentYear} ArtePapel Soluções Criativas. Todos os direitos reservados.`;
}

// Animação de fade-in nas seções ao rolar a página
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('main section').forEach(section => {
    observer.observe(section);
});

// Botão flutuante de voltar ao topo
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

