document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('submitBtn').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;

    if (nome && email && telefone && cpf && senha) {
        const usuario = {
            nome,
            email,
            telefone,
            cpf,
            senha
        };
        localStorage.setItem('usuario', JSON.stringify(usuario));
        alert('Seu cadastro foi realizado');
        document.getElementById('modal').style.display = 'none';
        window.location.href = 'perfil.html';
    } else {
        alert('Por favor, preencha todos os campos');
    }
});
