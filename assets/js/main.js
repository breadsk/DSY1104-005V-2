
const btnGuardar = document.getElementById("btnGuardar");
btnGuardar.addEventListener("click", function(e){
    e.preventDefault();

    email = document.getElementById("txtEmail").value;
    if(email === "") return;

    password = document.getElementById("txtPassWord").value;
    if(password === "") return;
    
    const resp = {
        "email": email,
        "password": password,
    }

    console.log(resp);

})
