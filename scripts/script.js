var currentQuestionIndex = 0;
    var responses = [];

    var questionsArray = [
      "Você sentiu que o instrutor criou um ambiente confortável para suas aulas práticas de direção?",
      "Como você classificaria a paciência do instrutor ao lidar com suas dúvidas e dificuldades durante as aulas?",
      "O instrutor demonstrou conhecimento técnico sólido durante as práticas de direção?",
      "A forma como o instrutor forneceu feedback contribuiu para o seu aprendizado nas aulas práticas?",
      "Você percebeu alguma melhoria em suas habilidades de direção devido ao estilo de ensino do instrutor?"
    ];

    function updateQuestion() {
        document.getElementById('pergunta-aqui').textContent = questionsArray[currentQuestionIndex];
        document.getElementById('perguntaAtual').textContent = 'Pergunta ' + (currentQuestionIndex + 1) + ' de ' + questionsArray.length;
      }
  
      function responder(button) {
        var buttons = document.getElementsByClassName('btn-questions');
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove('option-btn-selected');
        }
  
        button.classList.add('option-btn-selected');
  
        responses[currentQuestionIndex] = {
          pergunta: questionsArray[currentQuestionIndex],
          resposta: button.textContent.trim(),
          valor: button.getAttribute('data-valor')
        };
      }
  
      function continuar() {
        var buttons = document.getElementsByClassName('btn-questions');
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove('option-btn-selected');
        }
  
        currentQuestionIndex++;
  
        if (currentQuestionIndex < questionsArray.length) {
          updateQuestion();
        }
  
        // Verificar se é a última pergunta e mostrar o botão "Finalizar"
        if (currentQuestionIndex === questionsArray.length - 1) {
          document.getElementById('perguntaAtual').textContent = ''; // Remover a contagem na última pergunta
          document.getElementById('continuarButton').style.display = 'none';
          document.getElementById('finalizarButton').style.display = 'inline';
        }
      }
  
      function finalizar() {
        console.log('Respostas finais:', responses);
        alert('Pesquisa finalizada! Dados enviados:\n\n' + JSON.stringify(responses));
      }
  
      // Inicializa a primeira pergunta
      updateQuestion();