alert('username : fikri \n password : fikri')

function loginLogic() {
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    if (user == 'fikri' && pass == 'fikri') {
        window.location = 'product-responsive.html';
        alert('Selamat datang');

    } else {
        alert('Username dan password salah');

    }
}