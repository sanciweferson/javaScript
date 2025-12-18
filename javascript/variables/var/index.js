document.addEventListener("DOMContentLoaded", () => {

    // --- SEÇÃO 1: DECLARAÇÃO, REDECLARAÇÃO E REATRIBUIÇÃO ---

    // 1.1 Declaração Inicial
    var name = "Sanciweferson";
    document.getElementById("valueDeclarado").textContent = `"${name}"`;
    document.getElementById("resultDeclarado").textContent = `"${name}"`;

    // 1.2 Redeclaração (Permitida com var)
    // Embora a prática moderna desincentive, `var` permite isso
    var name = "San"; 
    document.getElementById("valueRedeclarado").textContent = `"${name}"`;
    document.getElementById("resultRedeclarado").textContent = `"${name}"`;

    // 1.3 Reatribuição
    name = "Weferson";
    document.getElementById("valueReatribuido").textContent = `"${name}"`;
    document.getElementById("resultReatribuido").textContent = `"${name}"`;

    // --- SEÇÃO 2: HOISTING (IÇAMENTO) ---
    
    // Função auxiliar para padronizar a exibição
    function showOutput(value) {
        // Se o valor for undefined, retorna a string "undefined" com classe
        if (value === undefined) {
            return "undefined";
        }
        // Senão, retorna o valor (com aspas se for string)
        return typeof value === 'string' ? `"${value}"` : value;
    }


    // 2.1 Hoisting de Variável (`var`) - Simples
    (function () {
        // console.log(hoistVar) é executado aqui, e pega o valor undefined.
        document.getElementById("hoistingSimples").textContent = showOutput(hoistVar);
        var hoistVar = "Variável Hoisted"; // A atribuição ocorre após o console.log
    })();


    // 2.2 Hoisting em Escopo de Função (Shadowing)
    (function () {
        var globalVal = 100; // Variável Global (ou superior)

        function teste() {
            // Hoisting move "var localVal;" para cá, valor inicial: undefined
            return localVal; // Retorna undefined, pois a atribuição (localVal = 10) ainda não ocorreu.
            var localVal = 10; // Atribuição que não é içada.
        }

        document.getElementById("hoistingFuncao").textContent = showOutput(teste());
    })();

    
    // 2.3 `var` Ignora Blocos (`if`, `for`)
    (function () {
        let blockVarResult;
        
        // A variável 'blockVar' é içada para o topo desta função (escopo)
        if (true) {
            var blockVar = 42;
        } 
        // Como 'var' não tem escopo de bloco, 'blockVar' é acessível fora do 'if'.
        blockVarResult = blockVar; 

        document.getElementById("hoistingIf").textContent = showOutput(blockVarResult);
    })();
});