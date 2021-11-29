function myValidation(){  
    if(validation())
    {
        
    }
    return false;     
}

function validation(){
    var name = document.reg.name.value;
    var password = document.reg.psw.value; 
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
    