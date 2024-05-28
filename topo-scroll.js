
// Simples código JavaScript para manter o cabeçalho fixo no topo da página
window.addEventListener('scroll', function() {
    const header = document.getElementById('topo');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0px 4px 2px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});
