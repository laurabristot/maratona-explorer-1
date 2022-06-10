//variaveis
const elementoresposta = document.querySelector('#resposta')
const inputpergunta = document.querySelector('#input_pergunta')
const buttonperguntar = document.querySelector('#buttonperguntar')
const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

//console.log(numeroaleatorio)

// clicar em fazer pergunta
function fazer_pergunta() {
  if (inputpergunta.value == '') {
    alert('Digite sua Pergunta')
    return
  }

  buttonperguntar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputpergunta.value + '</div>'

  //gerar numero aleatoria
  const totalrespostas = respostas.length
  const numeroaleatorio = Math.floor(Math.random() * totalrespostas)

  elementoresposta.innerHTML = pergunta + respostas[numeroaleatorio]

  elementoresposta.style.opacity = 1

  //sumir resposta depois de 3s
  setTimeout(function () {
    elementoresposta.style.opacity = 0
    buttonperguntar.removeAttribute('disabled')
  }, 3000)
}
