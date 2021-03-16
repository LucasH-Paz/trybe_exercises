// Exercicio
let estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MS', 'MT', 'MG', 'PA', 'PB', 'PR',
    'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

console.log(estados[15]);

function brazilStates() {
    let state = document.getElementById('state');
    for (let index = 0; index < estados.length; index += 1) { 
        let createState = document.createElement('option');
        createState.classList.add('option')       
        createState.innerText = estados[index];
        state.appendChild(createState);
    }
}

let access = document.getElementById('state');
access.addEventListener('click', brazilStates);

let access2 = document.getElementById('toPrevent');
access2.addEventListener('click', fluxCancel);

function fluxCancel (event) {
    event.preventDefault();
    alert('Verifique os dados informados, encontramos inconsistências');
}
