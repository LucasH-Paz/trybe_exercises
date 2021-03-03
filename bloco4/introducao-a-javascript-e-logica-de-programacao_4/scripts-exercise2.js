
function parlindromo (palavra) {
    let inverso = '';
    let result = false;
    let vericaResultado = '';
        for (let index = palavra.legnth - 1; index >= 0 ; index--){
            inverso = inverso + inverso[index];
        };
        if (inverso === palavra) { result = true} else {result = false};
        return result
};

console.log(parlindromo ('ana'));