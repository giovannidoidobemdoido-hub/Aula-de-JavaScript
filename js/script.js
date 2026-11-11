
/* let marcha = 'Maça'
let marcha01 = 'Uva'
const frutas = ['Laranja' , 78 , 76 , 'afasdsad']

let numero01 = '34'
let numero02 = 8

console.log(numero02)
 */
/* +   + */

/* let acender = document.querySelector('.acender')
let apagar = document.querySelector('.apagar')
let imagem = document.querySelector('.imagemLuz')


function acenderLuz(){

    imagem.src = './img/luz-acesa.jpg'
    acender.style.display = 'none'
    apagar.style.display = 'flex'
}

function apagarLuz(){

    imagem.src = './img/luz apagada.jpg'
    acender.style.display = 'flex'
    apagar.style.display = 'none'
}

function limparImagem(){

    imagem.src = ''
    acender.style.display = 'none'
    apagar.style.display = 'none'

}
 */

/* let tipoConta = prompt("Digite o tipo da conta - + | - | X | % |")

let numero01 = prompt('Digite o primeiro número:')
let numero02 = prompt('Digite o segundo número:')
let resultado = 0


switch(tipoConta){

    case '+':
        resultado = numero01 + numero02
        console.log(resultado)
        break
    case '-':
        resultado = numero01 - numero02
        console.log(resultado)
        break
    case 'X':
        resultado = numero01 * numero02
        console.log(resultado)
        break
    case '%':
        resultado = numero01 / numero02
        console.log(resultado)
        break
    default:
        console.log('Invalido')
}
 */

/* let idade =Number( prompt("Digite sua idade"))  variavel tipo numero para digitar a idade 

if(idade >= 18){
    alert("Você é maior de idade")  if=se alerta se você é maior de idade 
}

else{
    alert("Você é menor de idade")  else=se não é tudo que for dar erro ou mentira 
}
 */



function limparResultado(){

    let resultado = document.querySelector('#resultado')

    let valorBaseDigitado = document.querySelector('#valorBaseDigitado')

    let digiteAqui = document.querySelector('#digiteAqui').value = ''

    let valorBase = document.querySelector('#valorBase').value = ''
    
    resultado.innerHTML = 'Resultado: <br>'

    valorBaseDigitado.innerHTML = 'Valor Base: <br>'

}

function pegarResultadoInput(){

    let resultado = document.querySelector('#resultado')

    let valorBaseDigitado = document.querySelector('#valorBaseDigitado')

    let digiteAqui = document.querySelector('#digiteAqui').value

    let valorBase = document.querySelector('#valorBase').value

    valorBaseDigitado.innerHTML = 'Valor Base: ' + valorBase

    if(digiteAqui > valorBase){
        resultado.innerHTML = 'Resultado: Este valor ' + digiteAqui + ' é maior que ' + valorBase
    }

    else if(digiteAqui < 0){
        resultado.innerHTML = 'Resultado: Este valor ' + digiteAqui + ' é menor que zero'
    }

    else if(digiteAqui < valorBase){
        resultado.innerHTML = 'Resultado: Este valor ' + digiteAqui + ' é menor que ' + valorBase
    }

    else if(digiteAqui == valorBase){
        resultado.innerHTML = 'Resultado: Este valor ' + digiteAqui + ' é igual ao valor base (' + digiteAqui + ')'
    }

    else{
        resultado.innerHTML = 'Resultado: Número invalido'
    }



   /*  for(let i = 1; i <= 30; i++){
        resultado.innerHTML += numero01 + ' X ' + i + " = " + (numero01 * i) + '<br>'
    } */

}




let numero01 = 111


let numero02 = Number (("digite o segundo numero"))/* campo para digitar o segundo numero */

const soma = numero01+numero02

const valor_base = 100

if(soma > valor_base){
    alert("Esse numero:" + soma + " é maior que " + valor_base) /* se */

}
else if(soma == valor_base){
    alert("a soma dos valores é igual o valor base" + valor_base ) /* senão se */
}

else if(soma <0){
    alert("este numero é negativo")
}

else if(soma < valor_base){
    alert("Esse numero :" + soma + " é menor que "+ valor_base)
}
else{
    ("numero invalido") /* senão */
}




/* Tem somente um IF - Condição Simples
Tem IF e Else - Condição Composta
Tem IF , Else IF e Else - Condição encadeada
NaN (Not a Number )
Tipos de Pop-Up 

Alert(")
Confirm("")
Prompt("") */


/* < = menor
> = maior
== 

*/










































/* let numero01 = 16 Float */
/* let nteiro = 3 Int */ 
/* let numero02 = 20  String */
/* let soma = 0 */

/* + - soma 
+ - Concatenação
*/

/* let textoTitulo = document.querySelector('.titulo')
soma = numero01 + numero02

function mudarCor(){

    textoTitulo.style.color = 'blue'
}

function voltarCor(){

    textoTitulo.innerHTML = soma
}

function resetarValor(){

    textoTitulo.innerHTML = 0
} */


/* let euGiovanniSeiEmpinarMoto
let snake_costa_marcha_teste
let GiovanniDoido */



