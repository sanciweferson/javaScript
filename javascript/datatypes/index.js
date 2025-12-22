// String
const nameSpan = document.getElementById("stringValue")
const stringType = document.getElementById("stringType")
const name = "Sanciweferson"
nameSpan.textContent =  `${name}`
stringType.textContent =  `// typeof → ${typeof name}`

// Number
const ageSpan = document.getElementById("numberValue")
const namberType = document.getElementById("numberType")
const age = 29
ageSpan.textContent =  `${age}`
namberType.textContent =  `// typeof →${typeof age}`


// Null
const nullSpan = document.getElementById("nullValue")
const nullType = document.getElementById("nullType")
const temFilhos= false
nullSpan.textContent =  `${temFilhos}`
nullType.textContent =  `// typeof → ${typeof temFilhos}`




// Undefined
const undefinedSpan = document.getElementById("undefinedValue")
const undefinedType = document.getElementById("undefinedType")
let pontuacao  
undefinedSpan.textContent =  `${pontuacao}`
undefinedType.textContent =  `// typeof → ${typeof pontuacao}`




// Bigint
const bigIntSpan = document.getElementById("bigIntValue")
const bigIntType = document.getElementById("bigIntType")
let bigInt = 9948512684n  
bigIntSpan.textContent =  `${bigInt}`
bigIntType.textContent =  `// typeof → ${typeof bigInt}`




// Array
const arraySpan = document.getElementById("arrayValue")
const arrayType = document.getElementById("arrayType")
const frutas = ["Uva", "Banana", "Manga"]  
arraySpan.textContent =   `[${frutas.join(" , ")}]`
arrayType.textContent =  `// typeof → ${typeof frutas}`




// Objecto
const objectoName = document.getElementById("objectoName")
const objectoage = document.getElementById("objectoAge")
const objectoType = document.getElementById("objectoType")
const pessoa = {
  name: "Sanciweferson",
  age:29
} 
objectoName.innerHTML =   `${pessoa.name}  <span class=" type">// typeof → ${typeof pessoa}</span>`

objectoage.textContent =   `${pessoa.age}`
objectoType.textContent =  `// typeof → ${typeof pessoa}`


// Function







const functionSpan = document.getElementById("functionValue");
const functionType = document.getElementById("functionType");

function criarUsuario() {
  const name = "San";
  const age = 29;
  return `${name}, ${age}`;
}

// ISSO é o que vai para o front-end
const resultado = criarUsuario();

functionSpan.textContent = resultado;

functionType.textContent =
  `typeof função → ${typeof criarUsuario} | typeof retorno → ${typeof resultado}`;
