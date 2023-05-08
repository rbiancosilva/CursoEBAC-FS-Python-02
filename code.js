
let a;
let b;
let mensagem;

document.getElementById("formulario").addEventListener('submit', function (e){
    e.preventDefault();
    
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    mensagem = document.getElementById("status");
    
    if(b>a){
        mensagem.innerHTML="Status: Positivo :)";
        document.getElementById("status").classList.add("acerto");
        document.getElementById("status").classList.remove("erro");

    } else {
        mensagem.innerHTML="Status: Negativo :(";
        document.getElementById("status").classList.remove("acerto");
        document.getElementById("status").classList.add("erro");
    }
    document.getElementById("hd").innerHTML=(b+" é maior que "+ a+ " ?");
})