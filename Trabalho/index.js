function redirecionarParaInicio(event) {
    event.preventDefault(); 

    // Pegando os valores dos campos
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação do campo nome
    if (nome === '') {
        alert('Por favor, preencha o campo nome.');
        return;
    }
    if (nome.length < 3) {
        alert('O nome deve ter pelo menos 3 caracteres.');
        return;
    }
    if (nome.length > 50) {
        alert('O nome não pode ter mais de 50 caracteres.');
        return;
    }

    // Validação do campo sobrenome
    if (sobrenome === '') {
        alert('Por favor, preencha o campo sobrenome.');
        return;
    }
    if (sobrenome.length < 3) {
        alert('O sobrenome deve ter pelo menos 3 caracteres.');
        return;
    }
    if (sobrenome.length > 50) {
        alert('O sobrenome não pode ter mais de 50 caracteres.');
        return;
    }

    // Validação do campo email com expressão regular
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Validação do campo idade
    if (isNaN(idade) || idade <= 0 || idade >= 120) {
        alert('A idade deve ser um número positivo menor que 120.');
        return;
    }

    window.location.href = 'confirmacao.html?nome=' + encodeURIComponent(nome) + 
                           '&sobrenome=' + encodeURIComponent(sobrenome) + 
                           '&email=' + encodeURIComponent(email) + 
                           '&idade=' + encodeURIComponent(idade) +
                           '&mensagem=' + encodeURIComponent(mensagem);
}
