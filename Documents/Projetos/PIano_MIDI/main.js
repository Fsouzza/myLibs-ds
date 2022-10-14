const piano = document.querySelector('#piano');
const data = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

let html = ''

for(let octave = 0; octave <2; octave++){

    for(let i = 0; i < data.length; i++){
        let hasSharp = (data[i]!='E' && data[i]!='B') ? true: false
        html +=`<div class='teclasBrancas' data-code='${data[i]}${octave+4}'></div>`
    }
}

piano.insertAdjacentHTML('beforeend',html)