/*
var nome = "Rafael Galleani";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
console.log(frase.replace("Japão", "Brasil"))
console.log(frase.toUpperCase())
var idade = 29;
var idade2 = 10;
alert(nome + " tem " + idade + " anos");
*/

/*
var lista = ["maca", "pera,", "laranja"];
lista.push("uva");
console.log(lista[3]);
//lista.pop();
console.log(lista.length);
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
*/

/* dicionario
var fruta = { nome: "maça", cor: "vermelho" }
console.log(fruta);
console.log(fruta.nome);
*/

/*
var frutas = [{ nome: "maça", cor: "vermelho" }, { nome: "uva", cor: "roxo" }];
console.log(frutas);
console.log(frutas[1].nome);
*/

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
};
*/

/*
var count = 0;
while (count <= 5) {
    console.log(count);
    count++;
};

*/

/*
var count;
for (count = 0; count <= 5; count++) {
    console.log(count);
}
*/

/*
var d = new Date();
alert(d);
alert(d.getMonth());
*/

/*
function soma(n1, n2) {
    return n1 + n2;
}
alert(soma(5, 10));

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
function validaIdade(idade) {
    var validar; //local, se eu tiver a variavel FORA, ela será global
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigada por clicar!"
        //document.getElementById("agradecimento");
        //console.log(document.getElementById("agradecimento"));
        //alert("Obrigada por clicar!")
}

function redirecionar() {
    //window.open("https://tinypng.com/"); //abre em outra aba
    window.location.href = "https://tinypng.com/"; //abre na mesma aba
}

function trocar(Elemento) {
    Elemento.innerHTML = "Obrigada por passar o mouse!";
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse!"
    //alert("Trocar texto");
}

function voltar(Elemento) {
    Elemento.innerHTML = "Passe o mouse aqui.";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui."

}

function load() {
    alert("Página Carregada!")
}

function funcaoChange(Elemento) {
    console.log(Elemento.value)
}