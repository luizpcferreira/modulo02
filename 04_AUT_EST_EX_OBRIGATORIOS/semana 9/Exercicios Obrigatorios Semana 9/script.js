//ex 1
function checar(){
    let numero = document.getElementById("numero1").value;
    let arrn = numero.split("");
    if (arrn[0] % 2 == 0) {
        document.getElementById("resultado1").innerHTML = "O dígito é par";
    }
    else {
        document.getElementById("resultado1").innerHTML = "O dígito é impar";
    }
}

//ex 2

function calcular() {
    document.getElementById("resultado2").innerHTML = ""; 
    let numero = document.getElementById("numero2").value;
    let arrN = numero.split("");
    let soma = 0;
    for (let i = 0; i < arrN.length; i++) {
        if (Number(arrN[i]) >= 0 && Number(arrN[i]) <= 9) {
            soma += Number(arrN[i]);
        }
    }
    document.getElementById("resultado2").innerHTML +="A soma dos dígitos é: " + soma;
}

//ex 3
function ordenar(){
    document.getElementById("resultado3").innerHTML = "";
    let nomes = document.getElementById("nomes1").value;
    let arrNome = nomes.split(";");
    let sort = arrNome.sort();
    console.log(sort);
    document.getElementById("resultado3").innerHTML = sort;
}

//ex 4
function achar(){
    document.getElementById("resultado4").innerHTML = "";	
    let conteudo = document.getElementById("numero3").value;
    if (conteudo > 0) {
        var sequencia = [];
        sequencia[0] = 1;
        sequencia[1] = 1;
        for (var i = 2; i < conteudo; i++) {
            sequencia[i] = sequencia[i - 2] + sequencia[i - 1];
        }
    }
    document.getElementById("resultado4").innerHTML = 'A série de Fibonacci até o enésimo termo é: ' + sequencia;
}

//ex 5
function primo(){
    let valor1 = Number(document.getElementById("valor1").value);
    let valor2 = Number(document.getElementById("valor2").value);
    console.log('teste') 
    for (let i = valor1; i <= valor2; i++) {
        let alert = 0;
        for (let h = 2; j < i; h++) {
            if (i % h == 0) {
                alert += 1;	
                break;
            }
        }
        if (alert == 0 && i > 1) {
            console.log(i);
            document.getElementById("resultado5").innerHTML += i + '<br>';
        }
    }
}