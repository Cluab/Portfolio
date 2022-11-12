const errorbtn = document.getElementById('error');

// eslint-disable-next-line consistent-return, no-unused-vars
function valedateemail() {
  const email = document.getElementById('email').value;

  // eslint-disable-next-line no-empty-character-class
  const letters = email.replace(/[]+/g).toLowerCase();

  if (email === letters) {
    document.getElementById('form1').submit();
    errorbtn.innerHTML = '';
    // eslint-disable-next-line no-undef
    $('#hinddenBtn').trigger('click');
    return true;
  }
  if (email !== letters) {
    errorbtn.innerHTML = 'form not sent (email address should be in lowercase)';
    return false;
  }
}
