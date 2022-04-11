/*function ola(){
    //console.log('hello world')
    alert('hello world')
}*/

function montaNome(nome, sobrenome, idade){
    var msg = "maior de idade"

    if (idade < 18){
        msg = "menor de idade"
    }
    return `${nome} ${sobrenome} você tem ${idade} anos, portanto você é ${msg}`
   
}

/*function oi(){
    alert(`Ola ${nome}`)
}

function validaIdade(idade){
    if (idade < 18){
        console.log("vc é menor de idade")
    } else{
        console.log("vc é maior de idade")
    }
}*/
/*validaIdade(46)

function retornaSituacao(media){
    let situacao = "Aprovado"
    if (media < 7) {
        situacao = "Reprovado"
    }
    return situacao
}
//inferencia de tipos
function retornaReprovado(media){
    return media < 7
}

var retorno = retornaSituacao(8)
console.log(retorno)

var retornoBooleano = retornaReprovado(6)
console.log(retornoBooleano)*/


