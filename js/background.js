var preto = document.querySelector('#preto');
var cinza = document.querySelector('#cinza');
var cinza_claro = document.querySelector('#cinza_claro');



preto.addEventListener('click', () => {
    document.body.style.backgroundColor = '#000000';
    document.getElementById('preto').style.border = '2px solid var(--color-light)'
    document.getElementById('cinza').style.border = '2px solid var(--color-gray)'
    document.getElementById('cinza_claro').style.border = '2px solid var(--color-gray)'
                                  });
cinza.addEventListener('click', () => {
    document.body.style.backgroundColor= '#414141';
    document.getElementById('preto').style.border = '2px solid var(--color-gray)'
    document.getElementById('cinza').style.border = '2px solid var(--color-light)'
    document.getElementById('cinza_claro').style.border = '2px solid var(--color-gray)'
                                  });
cinza_claro.addEventListener('click', () => {
    document.body.style.backgroundColor = '#808080';
    document.getElementById('preto').style.border = '2px solid var(--color-gray)'
    document.getElementById('cinza').style.border = '2px solid var(--color-gray)'
    document.getElementById('cinza_claro').style.border = '2px solid var(--color-light)'
                                  });
                               
                          
