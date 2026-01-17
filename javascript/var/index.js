var varDeclarado = document.getElementById("js-value-1")
var name = "Sanciweferson"
varDeclarado.textContent = `${name}`

var varRedeclarado = document.getElementById("js-value-2")
var name = "San"
varRedeclarado.textContent = `${name}`

var varReatribuido = document.getElementById("js-value-3")
var name = "Weferson"

varReatribuido.textContent = `${name}`

var varHoist = document.getElementById("js-value-4")
varHoist.textContent = `${hoist}`
var hoist = "JavaScript"


var testeHoist = document.getElementById("js-value-5")
var valor = 100
function teste(){
  return valor
 var valor = 18
}

testeHoist.textContent = `${teste()}`

console.log(teste())





// dizerOi()
var dizerOi = function(){

}

var closure = document.getElementById("js-value-7")

var funcoes = []

for(var i = 0; i< 3; i++){
  funcoes.push(function (){return i})
}

// console.log(funcoes[0]())
closure.textContent =  `${funcoes[0]()}`



var closureCorreto = document.getElementById("js-value-8")
var funcoes = []
for (var i = 0; i < 6; i++) {
  ;(function (valorAtual) {
    funcoes.push(function () {
      return valorAtual
    })
  })(i)
}


var valores = funcoes.map((fn)=> fn())

closureCorreto.textContent = `${valores.join("- ")}`