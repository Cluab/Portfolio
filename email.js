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

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const textareaInput = document.getElementById('message');


function storetext() {
  const name = nameInput.value;
  const email = emailInput.value;
  const textarea = textareaInput.value;

  if (!name || !email || !textarea) {
    return;
  }
  const forminfo = {
    name,
    email,
    textarea,
  };

  localStorage.setItem('forminfo', JSON.stringify(forminfo));
}
