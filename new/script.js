// Adiciona os ouvintes de eventos após o carregamento da DOM

const perguntas=[
     "Você sentiu que o instrutor criou um ambiente confortável para suas aulas práticas de direção?",
      "Como você classificaria a paciência do instrutor ao lidar com suas dúvidas e dificuldades durante as aulas?",
      "O instrutor demonstrou conhecimento técnico sólido durante as práticas de direção?",
      "A forma como o instrutor forneceu feedback contribuiu para o seu aprendizado nas aulas práticas?",
      "Você percebeu alguma melhoria em suas habilidades de direção devido ao estilo de ensino do instrutor?"

]
const instrutorNome=[
   "Osvaldo","Emanuel","Carlos"
]
var respostas={};

var perguntaAtual=0
 
 document.getElementById("iniciarPesquisaBtn").addEventListener("click", function(){
   document.getElementById("iniciar").style.display="none";
   const proximoForm = document.getElementById("form-1").style.display="block";
  
   instrutorNomeForm = document.getElementById("InstrutorSelect");
   for(var instrutorFor of instrutorNome){
     const option = document.createElement("option")
     
     option.value=instrutorFor;

     option.text=instrutorFor;
     instrutorNomeForm.add(option);
   }

   
  
});
document.getElementById("formulario-1").addEventListener("click",function(event){
   document.getElementById("form-1").style.display="none";
   document.getElementById("perguntas").style.display="block";
   event.preventDefault();  

   

   setTimeout(Listaperguntas(),0)


   
 
   
}); 


Listaperguntas=()=>{
      
      
    
      const t = document.getElementById("perguntaVetor").innerText=perguntas[perguntaAtual];
      document.getElementById("contagemPerguntas").innerText=`Pergunta ${perguntaAtual+1} de ${perguntas.length}` 
      perguntaAtual=perguntaAtual+1
      /* const resposta = document.getElementById() */

      if(perguntaAtual==perguntas.length+1){
         setTimeout(Agradecimento(),1);
      }

      console.log(t)
      
}
Agradecimento=()=>{
   document.getElementById("perguntas").style.display="none";
   document.getElementById("agradecimento").style.display="block";
   let nomeAluno= document.getElementById("nomeAluno").value;
   let telefoneAluno=document.getElementById("telefoneAluno").value;
   let instrutorAluno=document.getElementById("InstrutorSelect").value;
   
   document.getElementById("dados").innerHTML=`
   <p>Nome: ${nomeAluno} </p>
   <p>Telefone: ${telefoneAluno} </p>
   <p>Instrutor: ${instrutorAluno} </p>
   `;
    
   PegaDados=(nomeAluno,telefoneAluno,instrutorAluno);


}

PegaDados=(nome,telefone,nomeInstrutor)=>{
 
}
function kellerClique(event) {
   var clickedButton = event.target;

   // Remove a classe "active" de todos os botões
   var kellerButtons = document.getElementsByClassName("keller");
   for (var i = 0; i < kellerButtons.length; i++) {
       kellerButtons[i].classList.remove("active");
   }

   // Adiciona a classe "active" apenas ao botão clicado
   clickedButton.classList.add("active");

   console.log(clickedButton.innerHTML);
   // Ou use: console.log(clickedButton.innerText);
}

// Adiciona os ouvintes de eventos após o carregamento da DOM
document.addEventListener("DOMContentLoaded", function() {
   var kellerButtons = document.getElementsByClassName("keller");

   for (var i = 0; i < kellerButtons.length; i++) {
       kellerButtons[i].addEventListener("click", kellerClique);
   }
});
