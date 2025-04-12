let users = {};

function showSignup() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('signup-box').style.display = 'block';
}

function showLogin() {
    document.getElementById('signup-box').style.display = 'none';
    document.getElementById('login-box').style.display = 'block';
}

function login() {
    let user = document.getElementById('login-user').value;
    let pass = document.getElementById('login-pass').value;
    let errorMessage = document.getElementById('error-message');

    if (users[user] && users[user] === pass) {
        alert('Login bem-sucedido!');
        window.location.href = 'Main.html';
    } else {
        errorMessage.style.display = 'block';
    }
}

function signup() {
    let user = document.getElementById('signup-user').value;
    let pass = document.getElementById('signup-pass').value;

    if (user && pass) {
        users[user] = pass;
        alert('Cadastro realizado com sucesso!');
        showLogin();
    } else {
        alert('Preencha todos os campos!');
    }
}