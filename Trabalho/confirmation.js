window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);

    // Exibir os dados na página
    document.getElementById('confirmNome').textContent = urlParams.get('nome');
    document.getElementById('confirmSobrenome').textContent = urlParams.get('sobrenome');
    document.getElementById('confirmEmail').textContent = urlParams.get('email');
    document.getElementById('confirmIdade').textContent = urlParams.get('idade');
    document.getElementById('confirmMensagem').textContent = urlParams.get('mensagem');
    document.getElementById('confirmButton').addEventListener('click', function() {
        // Captura os dados do formulário
        const dados = {
            nome: document.getElementById('confirmNome').textContent,
            sobrenome: document.getElementById('confirmSobrenome').textContent,
            email: document.getElementById('confirmEmail').textContent,
            idade: document.getElementById('confirmIdade').textContent,
            mensagem: document.getElementById('confirmMensagem').textContent,
        };
    
        // Converte para JSON
        const jsonData = JSON.stringify(dados, null, 2);
    
        // Cria um arquivo JSON para download
        const blob = new Blob([jsonData], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'dados_formulario.json';
        link.click();
        
        alert("Formulário enviado com sucesso!");
        alert("Arquivo JSON gerado e baixado com sucesso!");
    
        window.location.href = 'index.html';
    });

    document.getElementById('editButton').addEventListener('click', function() {
        // Redirecionar para o formulário novamente para editar
        window.location.href = 'contact.html';
    });
};
