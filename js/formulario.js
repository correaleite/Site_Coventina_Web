const botao = document.getElementById("btnRegistrar");

 

function registrar(){
const nome = document.getElementById('IDnome').value.trim();

   if( nome.length >= 5){
   alert('Nome registrado com sucesso!')
   cardNome.innerHTML = `
      <p class="texto-resultado">Nome: ${nome}</p>
    `;

   }
   else {
    alert('O nome requer no mínimo 5 caracteres')
    console.log(`email: ${email}`);
   }
}


botao.addEventListener("click", registrar); 