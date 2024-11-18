document.addEventListener('DOMContentLoaded', function() {
    // Verifica e imprime o conteúdo do localStorage para depuração
    console.log(localStorage.getItem('usuario'));
    
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario) {
        document.getElementById('nomeDisplay').textContent = `Nome: ${usuario.nome}`;
        document.getElementById('emailDisplay').textContent = `Email: ${usuario.email}`;
        document.getElementById('telefoneDisplay').textContent = `Telefone: ${usuario.telefone}`;
        document.getElementById('cpfDisplay').textContent = `CPF: ${usuario.cpf}`;
    } else {
        alert('Nenhum usuário cadastrado');
        window.location.href = 'index.html';
    }
});
