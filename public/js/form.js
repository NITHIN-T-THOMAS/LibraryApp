

function validation(){
    let name = document.getElementById('name');
    let phone = document.getElementById("phone");

    var regexpN =/^([a-zA-Z]+)$/;
    var regexpP =/^([0-9]{3,3})([\-. ]{1,1})?([0-9]{3,3})([\-. ]{1,1})?([0-9]{4,4})$/;
    var regexpE =/^([a-zA-Z0-9\.-]+)@([A-Za-z0-9]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    valemail();
    valname();
    valphone();
    valpwd();
    if(regexpN.test(name.value) && regexpP.test(phone.value) && regexpE.test(email.value)){            
            return true;
        }
    else{   if(regexpE.test(email.value)!=true){alert("Enter valid email");}
            else{alert("Enter valid details");}
            
            return false;
    }
}

function valname(){
    let name = document.getElementById('name');

    var regexpN =/^([a-zA-Z]+)$/;

    if(regexpN.test(name.value)&&name.value!=""){
            name.style.border = "2px solid black"            
            return true;
        }
    else{
            name.style.border = "2px solid red"
            return false;
    }
}

function valphone(){
    let phone = document.getElementById("phone");

    var regexpP =/^([0-9]{3,3})([\-. ]{1,1})?([0-9]{3,3})([\-. ]{1,1})?([0-9]{4,4})$/;

    if(regexpP.test(phone.value)){
            phone.style.border = "2px solid black"            
            return true;
        }
    else{
            phone.style.border = "2px solid red";
            alert("please enter a valid no.")
            return false;
    }
}

function valemail(){
    var email = document.getElementById("email");

    var regexpE =/^([a-zA-Z0-9\.-]+)@([A-Za-z0-9]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;

    if(regexpE.test(email.value)&&email.value!=''){
            email.style.border = "2px solid black";            
            return true;
        }
    else{
            email.style.border = "2px solid red";
            return false;
    }
}

function valpwd(){
    var pwd = document.getElementById("pwd");

    if(pwd.value == ""){
            pwd.style.border = "2px solid red";            
            return true;
        }
    else{
            pwd.style.border = "2px solid black";
            return false;
    }
}
