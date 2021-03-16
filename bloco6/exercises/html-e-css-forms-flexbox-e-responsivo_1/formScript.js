// Exercicio
let estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MS', 'MT', 'MG', 'PA', 'PB', 'PR',
    'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

console.log(estados[15]);

function brazilStates() {
    for (let index = 0; index < estados.length; index += 1) {
        let state = document.getElementById('state');
        let createState = document.createElement('option');
        createState.innerText = estados[index];
        let printState = state.appendChild(createState);
    }
}

let access = document.getElementById('state');
access.addEventListener('click', brazilStates);