let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generateSenha(){
    let senha="";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        senha+= charset.charAt(Math.floor(Math.random()* n));
    }
    
    containerPassword.classList.remove("hide");
    novaSenha = senha;
    password.innerHTML = senha;

}

function copiarSenha(){
    alert("Senha Copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}