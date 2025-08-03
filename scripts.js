document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const terms = document.getElementById('terms').checked;

  if (!terms) {
    alert('You must agree to the terms & conditions.');
    return;
  }

  alert(Registered Successfully!\nUsername: ${username}\nEmail: ${email});
});

document.querySelector('.close-btn').addEventListener('click', function() {
  document.querySelector('.overlay').style.display = 'none';
});