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

var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var textareaInput = document.getElementById("message");

var forminfo = JSON.parse(localStorage.getItem("forminfo"));


if (forminfo){
nameInput.value = forminfo.name;
emailInput.value = forminfo.email;
textareaInput.value = forminfo.textarea;
}
function storetext() {
  var name = nameInput.value;
  var email = emailInput.value;
  var textarea = textareaInput.value;

  if (!name || !email || !textarea){
    return;
  }
var forminfo = {
  name:name,
  email:email,
  textarea:textarea
}

localStorage.setItem("forminfo",JSON.stringify(forminfo))
}

