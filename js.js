// Para ser adicionado no script da página de login

function acessarConta() {
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    if (!nome || !senha) {
        alert('Preencha todos os campos!');
        return;
    }

    const storedNome = localStorage.getItem('nome');
    const storedSenha = localStorage.getItem('senha');

    if (nome === storedNome && senha === storedSenha) {
        alert('Acesso concedido');
        // Redirecionar para a página protegida
        window.location.href = 'estoque/estoque.html';  
    } else {
        alert('Nome ou senha incorretos');
    }
}

// Carregar dados do localStorage na inicialização da página
document.addEventListener('DOMContentLoaded', (event) => {
    const historicoCadastro = document.getElementById('historico_cadastro');
    const nome = localStorage.getItem('nome');
    const senha = localStorage.getItem('senha');
    
    if (nome && senha) {
        historicoCadastro.innerHTML = `<p>Nome: ${nome}</p><p>Senha: ${senha}</p>`;
    }
});
