
const errorbtn =document.getElementById("error")

function valedateemail() {

    var email = document.getElementById("email").value;


    let letters = email.replace(/[]+/g).toLowerCase();

    if(email == letters)
    {
      document.getElementById('form1').submit();
        errorbtn.innerHTML = ``
        $('#hinddenBtn').trigger("click");
     return true;
    }
  else if ( email != letters)
    {
      
    errorbtn.innerHTML = `form not sent (email address should be in lowercase)`
    return false;
    }
 }


//    for (i = 0; i < email.length ; i++){

//         if(email[i] == email[i].toUpperCase()){
//     
//      return false
    
// }

//  setTimeout(function(){errorbtn.style.display = `none`;}, 2000)
   


