class Pesquisa {
  constructor() {
      this.perguntas = [
          "Você sentiu que o instrutor criou um ambiente confortável para suas aulas práticas de direção?",
          // Adicione as outras perguntas aqui
      ];
      this.respostas = [];
      this.perguntaAtualIndex = 0;
  }

  iniciarPesquisa() {
      this.toggleDisplay('container', 'container-form');
  }

  continuarFormulario() {
      this.toggleDisplay('container-form', 'container-questions');
      this.mostrarPergunta();
  }

  continuar() {
      // Lógica para avançar para a próxima pergunta
      const resposta = document.querySelector('.btn-questions.selected');
      if (resposta) {
          this.respostas.push(resposta.dataset.valor);
          this.perguntaAtualIndex++;

          if (this.perguntaAtualIndex < this.perguntas.length) {
              this.mostrarPergunta();
          } else {
              this.toggleDisplay('container-questions', 'container-agradecimento');
          }
      } else {
          // Caso o usuário não tenha selecionado uma resposta
          document.querySelector('.validation').style.display = 'block';
      }
  }

  mostrarPergunta() {
      const perguntaAtual = document.getElementById('pergunta-aqui');
      perguntaAtual.textContent = this.perguntas[this.perguntaAtualIndex];
      document.getElementById('perguntaAtual').textContent = `Pergunta ${this.perguntaAtualIndex + 1} de 5`;
      document.querySelectorAll('.btn-questions').forEach(btn => btn.classList.remove('selected'));
      document.querySelector('.validation').style.display = 'none';
  }

  responder(btn) {
      document.querySelectorAll('.btn-questions').forEach(btn => btn.classList.remove('selected'));
      btn.classList.add('selected');
  }

  finalizar() {
      // Lógica para finalizar a pesquisa
      this.toggleDisplay('container-questions', 'container-agradecimento');
  }

  toggleDisplay(show, hide) {
      const sections = ['container', 'container-form', 'container-questions', 'container-agradecimento'];

      sections.forEach(section => {
          const displayStyle = section === show ? 'block' : 'none';
          document.querySelector(`.${section}`).style.display = displayStyle;
      });

      if (hide) {
          document.querySelector(`.${hide}`).style.display = 'none';
      }
  }
}

const pesquisa = new Pesquisa();
