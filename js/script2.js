function myValidation(){  
    if(validation())
    {
        
    }
    return false;     
}

function validation(){
    var name = document.reg.name.value;
    var password = document.reg.psw.value;
    var username = document.reg.username.value;
    var contact =  document.reg.contact.value;

    if (name==null || name==""){
        alert("You forgot to write your username");  
        var error = document.getElementById("font-formname2");
        error.classList.add("error");
      return false;  
    }
    else {
        var sucess = document.getElementById("font-formname2");
        sucess.classList.remove("error"); 
        sucess.classList.add("sucess");
    }
    if (username==null || username==""){
        alert("You forgot to write your name");  
        var error = document.getElementById("font-formpassword");
        error.classList.add("error");
      return false;  
    }
    else {
        var sucess = document.getElementById("font-formpassword");
        sucess.classList.remove("error"); 
        sucess.classList.add("sucess");
    }

    if (contact==null || contact==""){
        alert("You forgot to write your contacts");  
        var error = document.getElementById("font-formpasswordc");
        error.classList.add("error");
      return false;  
    }
    else {
        var sucess = document.getElementById("font-formpasswordc");
        sucess.classList.remove("error"); 
        sucess.classList.add("sucess");
    }

    if(password.length<6){  
        alert("Password must contain at least 6 characters");
        var error = document.getElementById("font-formpassword2");
        error.classList.add("error");  
      return false;  
      }
      else {
        var sucess = document.getElementById("font-formpassword2");
        sucess.classList.remove("error");
    }
    window.location.href = 'index3.html';
}
    