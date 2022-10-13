const errorbtn = document.getElementById('error');

function valedateemail() {
  const email = document.getElementById('email').value;

  const letters = email.replace(/[]+/g).toLowerCase();

  if (email === letters) {
    document.getElementById('form1').submit();
    errorbtn.innerHTML = '';
    $('#hinddenBtn').trigger('click');
    return true;
  }
  if (email !== letters) {
    errorbtn.innerHTML = 'form not sent (email address should be in lowercase)';
    return false;
  }
}
