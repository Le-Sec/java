function somaMaior() {
    let a = Number(prompt("Digite um número"));
    let b = Number(prompt("Digite outro número"));
    let c = Number(prompt("Digite mais um número"));
    let soma = a + b;

    if (soma < c) {
        alert("A soma de a + b é: " + soma)
    } else {
        console.log("fim")
    }
}

function tempoCasamento() {
    let nome = String(prompt("Digite seu Nome"))
    let genero = String(prompt("Qual seu Gênero?'M'ou 'F'")).
        toUpperCase;
    let estadoCivil = String(prompt("Qual seu Estado Civil? Solteiro(a) ou Casado(a)?")).toLowerCase();
    console.log(`
    ========
    Nome: ${Nome},
    Genero: ${genero},
    estado civil: ${estadoCivil}
    `);
    console.log(genero);
    console.log(estadocivil);
}

function imparPar() {
    let num = Number(prompt("Digite um número:"));
    if (num % 2 === 0) {
        alert("este numero é par");
    } else if (num % 2 === 1) {
        alert("este numero é impa")
    } else {
        alert(" caractere inválido")
        imparPar()

    }

}


function valoresIguais() {
    let a = parseFloat(prompt("Digite um número"));
    let b = parseFloat(prompt("digite outro Número"));

    if (a === b) {
        let c = a + b;
        alert("soma de A + B é:" + c);
    } else {
        let c = a * b;
        alert(" o produto de A * B é" + C);
    }
}


function valorPositivoNegativo() {
    let num = Number(prompt("Digite um número, positivo ou Negativo:"));
    if (num < 0) {
        let resultado = num * 3;
        alert("O triplo de " + num + " é: " + resultado);
    } else {
        let resultado = num * 2;
        alert("O dobro de " + num + " é: " + resultado);
    }
}


function valorBooleano() {
    let bool1 = String(prompt("Digite true ou false").toLocaleLowerCase());
    let bool2 = String(prompt("Digite true ou false").toLocaleLowerCase());

    console.log(bool1);
    console.log(bool2);
}

function lerVariaveis() {
    let variavel = Number(prompt("Digite um número"));
    if (variavel % 2 === 0) {
        let soma = variavel + 5
        alert("A resposta é: " + soma);
    } else {
        let soma = variavel + 8
        alert("A Resposta é: " + soma);
    }

}

function ordenarDecrescente() {
    let a = parseInt(prompt("Digite o valar de A:"));
    let b = parseInt(prompt("Digite o valar de B:"));
    let c = parseInt(prompt("Digite o valar de C:"));

    if (a > b && a > c) {
        if (b > c) {
            alert(`${a}, ${b}, ${c}`);
        } else {
            alert(`${a}, ${c}, ${b}`);
        }
    } else if (b > a && b > c) {
        if (c > a) {
            alert(`${b}, ${c}, ${a}`);
        } else {
            alert(`${b}, ${a}, ${c}`);
        }
    } else {
        if (b > a) {
            alert(`${c}, ${b}, ${a}`);
        } else {
            alert(`${c}, ${a}, ${b}`);
        }
    }
}

function pesoIdeal() {
    let altura = parseFloat(prompt("Digite sua Altura:(ex:1.80)"));
    let genero = prompt("Dgite seu Genero:(M ou F)").toLocaleLowerCase();
    let pesoIdeal;

    switch (genero) {
        case "m":
            pesoIdeal = (72.7 * altura) - 58;
            break;
        case "f":
            pesoIdeal = (62.1 * altura) - 44.7;
            break;
        default:
            alert("Genero informado é invalido!");
            return;
    }
    alert(`O peso ideial é ${pesoIdeal.toFixed(2)} Kg.`);
}