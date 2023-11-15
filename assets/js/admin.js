function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    // Enviar dados para o servidor
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, senha }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.logado) {
                alert('Logado');
                window.location.href = 'dashboardJurassic.html';
            } else {
                alert('Login ou senha incorretos');
            }
        })
        .catch(error => console.error('Erro:', error));
}
